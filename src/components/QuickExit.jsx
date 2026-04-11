import { useEffect } from "react";

/**
 * QuickExit — Safety feature for domestic violence survivors.
 * Replaces window history so pressing "Back" won't return to the app.
 * Triggered by clicking the button OR pressing Escape 3 times rapidly.
 */
function QuickExit({ floating = false }) {
  const exitSite = () => {
    // Clear any sensitive data from localStorage
    localStorage.removeItem("user");

    // Replace the entire history entry so "Back" won't return here
    window.location.replace("https://www.google.com");
  };

  useEffect(() => {
    let escCount = 0;
    let escTimer = null;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        escCount++;
        clearTimeout(escTimer);

        if (escCount >= 3) {
          exitSite();
        }

        // Reset counter after 1.5 seconds of no presses
        escTimer = setTimeout(() => {
          escCount = 0;
        }, 1500);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(escTimer);
    };
  }, []);

  if (floating) {
    return (
      <button
        className="quick-exit-floating"
        onClick={exitSite}
        title="Leave this site immediately (or press Escape 3 times)"
        id="quick-exit-floating"
      >
        ✕ Quick Exit
      </button>
    );
  }

  return (
    <button
      className="quick-exit-btn"
      onClick={exitSite}
      title="Leave this site immediately (or press Escape 3 times)"
      id="quick-exit-sidebar"
    >
      ⚡ Quick Exit
    </button>
  );
}

export default QuickExit;
