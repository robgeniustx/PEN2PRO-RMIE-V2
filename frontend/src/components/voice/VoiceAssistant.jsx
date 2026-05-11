/**
 * PEN2PRO Voice Assistant
 * ─────────────────────────────────────────────────────────────
 * A floating voice-powered business coach that lives on every
 * page. Users tap the mic, speak their question, and hear the
 * PEN2PRO AI respond in real-time using Web Speech APIs.
 *
 * - SpeechRecognition  → voice-to-text (no external API needed)
 * - /api/voice/chat    → PEN2PRO AI response text
 * - SpeechSynthesis    → text-to-speech (built into browsers)
 */

import { useState, useRef, useEffect, useCallback } from "react";

const COLORS = {
  bg: "#0d0d0f",
  panel: "#13141a",
  border: "#1e2030",
  accent: "#6c47ff",
  accentHover: "#7c5aff",
  accentGlow: "rgba(108,71,255,0.35)",
  gold: "#f5c542",
  text: "#e8e8f0",
  muted: "#6b6d85",
  userBubble: "#1a1b2e",
  aiBubble: "#16172a",
  error: "#ff4d4d",
  listening: "#22c55e",
};

// ─── Detect browser SpeechRecognition support ────────────────────────────────
const SpeechRecognitionAPI =
  typeof window !== "undefined"
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;

// ─── Brand greeting ──────────────────────────────────────────────────────────
const GREETING =
  "PEN2PRO Voice is online. I'm your AI business coach. Ask me anything about building your business, credit readiness, funding, or your roadmap. What are you working on?";

export default function VoiceAssistant() {
  const [open, setOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");
  const [supported, setSupported] = useState(true);

  const recognitionRef = useRef(null);
  const scrollRef = useRef(null);
  const synthRef = useRef(null);
  const historyRef = useRef([]);

  // Keep ref in sync with state for use inside callbacks
  useEffect(() => {
    historyRef.current = history;
  }, [history]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, transcript, processing]);

  // Check support
  useEffect(() => {
    if (!SpeechRecognitionAPI) {
      setSupported(false);
    }
  }, []);

  // Greet on first open
  useEffect(() => {
    if (open && history.length === 0) {
      const greeting = { role: "assistant", content: GREETING };
      setHistory([greeting]);
      speakText(GREETING);
    }
  }, [open]);

  // ─── Text-to-speech ────────────────────────────────────────────────────────
  const speakText = useCallback((text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // Prefer a deep male US English voice for the PEN2PRO persona
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(
      (v) =>
        (v.name.includes("Google US English") ||
          v.name.includes("Alex") ||
          v.name.includes("Daniel") ||
          v.name.includes("en-US")) &&
        !v.name.includes("Female")
    );
    if (preferred) utterance.voice = preferred;

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    synthRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, []);

  const stopSpeaking = useCallback(() => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  }, []);

  // ─── Call AI backend ───────────────────────────────────────────────────────
  const sendToAI = useCallback(async (userMessage) => {
    if (!userMessage.trim()) return;
    setProcessing(true);
    setError("");
    stopSpeaking();

    // Append user message immediately
    const updated = [
      ...historyRef.current,
      { role: "user", content: userMessage },
    ];
    setHistory(updated);

    try {
      const res = await fetch("/api/voice/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          context: `User is on page: ${window.location.pathname}`,
          conversation_history: updated.slice(-8),
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const reply = data.response || "I didn't catch that. Try again.";

      setHistory((prev) => [...prev, { role: "assistant", content: reply }]);
      speakText(reply);
    } catch (err) {
      const fallback =
        "Couldn't reach the PEN2PRO engine right now. Check your connection and try again.";
      setHistory((prev) => [
        ...prev,
        { role: "assistant", content: fallback },
      ]);
      setError("Connection issue. Response may be limited.");
      speakText(fallback);
    } finally {
      setProcessing(false);
    }
  }, [speakText, stopSpeaking]);

  // ─── Voice recognition ─────────────────────────────────────────────────────
  const startListening = useCallback(() => {
    if (!SpeechRecognitionAPI || listening) return;
    stopSpeaking();
    setTranscript("");
    setError("");

    const recognition = new SpeechRecognitionAPI();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);

    recognition.onresult = (e) => {
      let interim = "";
      let final = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) final += t;
        else interim += t;
      }
      setTranscript(final || interim);
      if (final) {
        recognition.stop();
        sendToAI(final.trim());
        setTranscript("");
      }
    };

    recognition.onerror = (e) => {
      setListening(false);
      if (e.error === "no-speech") {
        setError("No speech detected. Tap the mic and speak clearly.");
      } else if (e.error === "not-allowed") {
        setError("Microphone access denied. Please allow mic permissions.");
        setSupported(false);
      } else {
        setError(`Mic error: ${e.error}`);
      }
    };

    recognition.onend = () => setListening(false);

    recognitionRef.current = recognition;
    recognition.start();
  }, [listening, sendToAI, stopSpeaking]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setListening(false);
  }, []);

  // ─── Close handler ─────────────────────────────────────────────────────────
  const handleClose = () => {
    stopListening();
    stopSpeaking();
    setOpen(false);
    setTranscript("");
    setError("");
  };

  const clearChat = () => {
    stopListening();
    stopSpeaking();
    setHistory([]);
    setTranscript("");
    setError("");
    // Re-trigger greeting
    setTimeout(() => {
      const greeting = { role: "assistant", content: GREETING };
      setHistory([greeting]);
      speakText(GREETING);
    }, 100);
  };

  // ─── Mic button state ──────────────────────────────────────────────────────
  const micState = listening ? "listening" : processing ? "processing" : "idle";

  return (
    <>
      {/* ── Floating Trigger Button ──────────────────────────────────────── */}
      <button
        onClick={() => (open ? handleClose() : setOpen(true))}
        aria-label="Open PEN2PRO Voice Coach"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 9999,
          width: "62px",
          height: "62px",
          borderRadius: "50%",
          background: open
            ? "linear-gradient(135deg, #ff4d4d, #c73030)"
            : `linear-gradient(135deg, ${COLORS.accent}, #9b59ff)`,
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: open
            ? "0 4px 24px rgba(255,77,77,0.5)"
            : `0 4px 24px ${COLORS.accentGlow}`,
          transition: "all 0.25s ease",
          outline: "none",
        }}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="white" stroke="none" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        )}
      </button>

      {/* ── Voice Panel ──────────────────────────────────────────────────── */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "104px",
            right: "28px",
            zIndex: 9998,
            width: "min(420px, calc(100vw - 40px))",
            maxHeight: "75vh",
            background: COLORS.panel,
            borderRadius: "20px",
            border: `1px solid ${COLORS.border}`,
            boxShadow: `0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px ${COLORS.border}`,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px 20px",
              borderBottom: `1px solid ${COLORS.border}`,
              background: "linear-gradient(135deg, #0f1020, #151628)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {/* Animated orb */}
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: `radial-gradient(circle at 35% 35%, #9b59ff, ${COLORS.accent})`,
                boxShadow: speaking
                  ? `0 0 20px ${COLORS.accentGlow}, 0 0 40px ${COLORS.accentGlow}`
                  : `0 0 10px ${COLORS.accentGlow}`,
                animation: speaking ? "pulse 1.2s ease-in-out infinite" : "none",
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "14px",
                  color: COLORS.text,
                  letterSpacing: "0.02em",
                }}
              >
                PEN2PRO{" "}
                <span
                  style={{
                    color: COLORS.accent,
                    fontWeight: 800,
                    letterSpacing: "0.05em",
                  }}
                >
                  VOICE
                </span>
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: COLORS.muted,
                  marginTop: "1px",
                }}
              >
                {speaking
                  ? "Speaking…"
                  : listening
                  ? "Listening…"
                  : processing
                  ? "Thinking…"
                  : "AI Business Coach — Ready"}
              </div>
            </div>
            <button
              onClick={clearChat}
              title="Clear conversation"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: COLORS.muted,
                padding: "4px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                fontSize: "11px",
                gap: "4px",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 .49-3.45" />
              </svg>
            </button>
          </div>

          {/* Chat history */}
          <div
            ref={scrollRef}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              scrollbarWidth: "thin",
              scrollbarColor: `${COLORS.border} transparent`,
            }}
          >
            {history.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "82%",
                    padding: "10px 14px",
                    borderRadius:
                      msg.role === "user"
                        ? "16px 16px 4px 16px"
                        : "16px 16px 16px 4px",
                    background:
                      msg.role === "user" ? COLORS.accent : COLORS.aiBubble,
                    color: COLORS.text,
                    fontSize: "13.5px",
                    lineHeight: "1.55",
                    border:
                      msg.role === "user"
                        ? "none"
                        : `1px solid ${COLORS.border}`,
                    boxShadow:
                      msg.role === "assistant" && i === history.length - 1
                        ? `0 0 12px rgba(108,71,255,0.15)`
                        : "none",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Live transcript */}
            {transcript && (
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div
                  style={{
                    maxWidth: "82%",
                    padding: "10px 14px",
                    borderRadius: "16px 16px 4px 16px",
                    background: "rgba(108,71,255,0.25)",
                    color: COLORS.text,
                    fontSize: "13.5px",
                    lineHeight: "1.55",
                    border: `1px dashed ${COLORS.accent}`,
                    opacity: 0.85,
                    fontStyle: "italic",
                  }}
                >
                  {transcript}…
                </div>
              </div>
            )}

            {/* Processing indicator */}
            {processing && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  style={{
                    padding: "10px 18px",
                    borderRadius: "16px 16px 16px 4px",
                    background: COLORS.aiBubble,
                    border: `1px solid ${COLORS.border}`,
                    display: "flex",
                    gap: "6px",
                    alignItems: "center",
                  }}
                >
                  {[0, 1, 2].map((n) => (
                    <div
                      key={n}
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: COLORS.accent,
                        animation: `bounce 1.2s ease-in-out ${n * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Error */}
            {error && (
              <div
                style={{
                  padding: "8px 12px",
                  borderRadius: "8px",
                  background: "rgba(255,77,77,0.12)",
                  border: "1px solid rgba(255,77,77,0.3)",
                  color: COLORS.error,
                  fontSize: "12px",
                  textAlign: "center",
                }}
              >
                {error}
              </div>
            )}
          </div>

          {/* Controls */}
          <div
            style={{
              padding: "14px 20px",
              borderTop: `1px solid ${COLORS.border}`,
              background: "#0f1020",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* Unsupported message */}
            {!supported && (
              <div
                style={{
                  fontSize: "12px",
                  color: COLORS.error,
                  textAlign: "center",
                  padding: "4px 8px",
                }}
              >
                Your browser doesn't support voice input. Try Chrome or Edge.
              </div>
            )}

            {/* Mic button */}
            <button
              onClick={listening ? stopListening : startListening}
              disabled={!supported || processing}
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                border: "none",
                cursor: supported && !processing ? "pointer" : "not-allowed",
                background:
                  micState === "listening"
                    ? `radial-gradient(circle, ${COLORS.listening}, #16a34a)`
                    : micState === "processing"
                    ? `radial-gradient(circle, #888, #555)`
                    : `radial-gradient(circle, ${COLORS.accentHover}, ${COLORS.accent})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  micState === "listening"
                    ? "0 0 0 8px rgba(34,197,94,0.2), 0 0 0 16px rgba(34,197,94,0.08)"
                    : micState === "processing"
                    ? "none"
                    : `0 0 0 6px ${COLORS.accentGlow}`,
                transition: "all 0.2s ease",
                animation:
                  micState === "listening" ? "ripple 1.5s ease-out infinite" : "none",
                outline: "none",
              }}
            >
              {micState === "processing" ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="3" fill="white" stroke="none" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="white" stroke="none" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="white" strokeWidth="2" />
                  <line x1="12" y1="19" x2="12" y2="23" stroke="white" strokeWidth="2" />
                  <line x1="8" y1="23" x2="16" y2="23" stroke="white" strokeWidth="2" />
                </svg>
              )}
            </button>

            <div style={{ fontSize: "11px", color: COLORS.muted, textAlign: "center" }}>
              {micState === "listening"
                ? "Tap to stop"
                : micState === "processing"
                ? "Processing your message…"
                : "Tap mic · Speak · Get coached"}
            </div>

            {/* Stop speaking */}
            {speaking && (
              <button
                onClick={stopSpeaking}
                style={{
                  background: "transparent",
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: "8px",
                  padding: "5px 12px",
                  color: COLORS.muted,
                  fontSize: "11px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
                Stop speaking
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── CSS Animations ───────────────────────────────────────────────── */}
      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 10px rgba(108,71,255,0.35); }
          50% { box-shadow: 0 0 30px rgba(108,71,255,0.7), 0 0 60px rgba(108,71,255,0.3); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.6; }
          40% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes ripple {
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          70% { box-shadow: 0 0 0 18px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }
      `}</style>
    </>
  );
}
