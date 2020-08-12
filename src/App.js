import React from 'react';

import ClipboardIcon from "./components/icons/ClipboardIcon";

function App() {
  return (
    <div className="m-container">
      <div className="m-generator">
          <h2 className="m-generator__header">
            Password Generator
          </h2>

          <div className="m-generator__password">
            tC5%gO1.iS0!pQ3wD6/

            <button className="m-generator__passwordGenerateBtn">
              <ClipboardIcon />
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="password-length">Password length</label>
            <input name="password-length" id="password-length" type="number"  max="20" min="5" defaultValue="10"/>
          </div>

          <div className="form-group">
            <label htmlFor="password-length">Include uppercase letters</label>
            <input name="uppercase-letters" type="checkbox"/>
          </div>

          <div className="form-group">
            <label htmlFor="lowercase-letters">Include lowercase letters</label>
            <input name="lowercase-letters" type="checkbox"/>
          </div>

          <div className="form-group">
            <label htmlFor="include-numbers">Include Numbers</label>
            <input name="include-numbers" type="checkbox"/>
          </div>

          <div className="form-group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <input name="include-symbols" type="checkbox"/>
          </div>

          <button className="m-generator__btn">Generate Password</button>
      </div>

    </div>
  );
}

export default App;
