import { useEffect, useState } from "react";
import { getStoredUser, isSignedIn } from "../api/authApi";

// Reflects sign-in state in the UI and updates when the user signs in or out, in this tab or another.
export default function useAuth() {
  const read = () => ({ signedIn: isSignedIn(), user: getStoredUser() });
  const [state, setState] = useState(read);

  useEffect(() => {
    const update = () => setState(read());
    window.addEventListener("pen2pro-auth", update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener("pen2pro-auth", update);
      window.removeEventListener("storage", update);
    };
  }, []);

  return state;
}
