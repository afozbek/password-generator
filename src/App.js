import React, { useState, useRef } from "react";

import ClipboardIcon from "./components/icons/ClipboardIcon";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { COPY_SUCCESS } from "./messages";

toast.configure();

function App() {
  const [password, setPassword] = useState("tC5%gO1.iS0!pQ3wD6/");
  const [copyBtnText, setCopyBtnText] = useState("COPY");
  const [passwordLength, setPasswordLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const copyBtn = useRef();

  const handleGeneratePassword = (e) => {
    console.log("Generating password");
  };

  const copyToClipboard = () => {
    const newTextArea = document.createElement("textarea");
    newTextArea.innerText = password;
    document.body.appendChild(newTextArea);
    newTextArea.select();
    document.execCommand("copy");
    newTextArea.remove();

    setCopyBtnText("COPIED");
    copyBtn.current.disabled = true;
    setTimeout(() => {
      setCopyBtnText("COPY");
      copyBtn.current.disabled = false;
    }, 3000);
  };

  const notify = (message) => {
    toast(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleCopyPassword = (e) => {
    copyToClipboard();

    notify(COPY_SUCCESS);
  };

  return (
    <div className="m-container">
      <div className="m-generator">
        <h2 className="m-generator__header">Password Generator</h2>

        <div className="m-generator__password">
          {password}
          <button
            className="m-generator__passwordGenerateBtn"
            onClick={handleCopyPassword}
            ref={copyBtn}
          >
            {/* <ClipboardIcon /> */}
            {copyBtnText}
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="password-length">Password length</label>
          <input
            name="password-length"
            id="password-length"
            type="number"
            max="20"
            min="5"
            defaultValue={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="uppercase-letters">Include uppercase letters</label>
          <input
            id="uppercase-letters"
            name="uppercase-letters"
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lowercase-letters">Include lowercase letters</label>
          <input
            id="lowercase-letters"
            name="lowercase-letters"
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="include-numbers">Include Numbers</label>
          <input
            id="include-numbers"
            name="include-numbers"
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="include-symbols">Include Symbols</label>
          <input
            id="include-symbols"
            name="include-symbols"
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
        </div>

        <button className="m-generator__btn" onClick={handleGeneratePassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
