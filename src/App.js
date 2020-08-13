import React, { useState } from 'react';

import ClipboardIcon from "./components/icons/ClipboardIcon";




function App() {
  const [passwordLength, setPasswordLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleCopyPassword = (e) => {
    console.log("Copying password")
  }

  const handleGeneratePassword = (e) => {
    console.log("Generating password");
  }

  return (
    <div className="m-container">
      <div className="m-generator">
          <h2 className="m-generator__header">
            Password Generator
          </h2>

          <div className="m-generator__password">
            tC5%gO1.iS0!pQ3wD6/

            <button className="m-generator__passwordGenerateBtn" onClick={handleCopyPassword}>
              <ClipboardIcon />
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="password-length">Password length</label>
            <input name="password-length" id="password-length" type="number"  max="20" min="5" defaultValue={passwordLength} onChange={(e)=>setPasswordLength(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="password-length">Include uppercase letters</label>
            <input name="uppercase-letters" type="checkbox" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)}/>
          </div>

          <div className="form-group">
            <label htmlFor="lowercase-letters">Include lowercase letters</label>
            <input name="lowercase-letters" type="checkbox" checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} />
          </div>

          <div className="form-group">
            <label htmlFor="include-numbers">Include Numbers</label>
            <input name="include-numbers" type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)}/>
          </div>

          <div className="form-group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <input name="include-symbols" type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)}/>
          </div>

          <button className="m-generator__btn" onClick={handleGeneratePassword}>Generate Password</button>
      </div>

    </div>
  );
}

export default App;
