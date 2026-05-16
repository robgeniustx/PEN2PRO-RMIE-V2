import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  async function testCaptionAgent() {
    setResult("Testing caption agent...");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/agents/caption/run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tier: "pro",
          topic: "Small business funding",
          platform: "instagram",
        }),
      });

      const data = await res.json();

      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setResult(String(error));
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Pen2Pro Agent Test</h1>

      <button onClick={testCaptionAgent}>
        Test Caption Agent
      </button>

      <pre style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>
        {result}
      </pre>
    </div>
  );
}

export default App;