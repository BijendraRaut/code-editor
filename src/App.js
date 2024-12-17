import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [isLocked, setLocked] = useState(false);

  // Load saved code from local storage when the component mounts
  useEffect(() => {
    try {
      const savedCode = localStorage.getItem("savedCode");
      if (savedCode) {
        setCode(savedCode);
      }
    } catch (err) {
      console.error("Unable to load your saved code", err);
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Your code has copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy the code", err);
    }
  };

  // Save the code to local storage
  const handleSave = () => {
    try {
      localStorage.setItem("savedCode", code);
      alert("Code saved !");
    } catch (err) {
      console.error("Unable to save code", err);
    }
  };

  const handleLockToggle = () => {
    setLocked(!isLocked);
  };

  // Only update the code if the editor is not locked
  const handleCodeChange = (e) => {
    if (!isLocked) {
      setCode(e.target.value);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Code Editor</h1>
      <div className={`code-container ${isLocked ? "locked" : ""}`}>
        <textarea
          value={code}
          onChange={handleCodeChange}
          className="code-box"
          spellCheck="false"
          readOnly={isLocked}
        />
        <div className="code-icon">
          <button className="code-button" onClick={handleCopy}>
            Copy
          </button>
          <button className="code-button" onClick={handleSave}>
            Save
          </button>
          <button className="code-button" onClick={handleLockToggle}>
            {isLocked ? "Unlock" : "Lock"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
