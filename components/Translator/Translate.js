import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Convert from "./Convert";
import options from "./Languages"
function Translate() {
  const [language, setLanguage] = useState(options[1]);
  const [translateTo, setTranslateTo] = useState(options[0]);
  const [text, setText] = useState("Hello");
  return (
    <div style={{ marginTop: "30px" }}>
      <div className="ui form container">
        <div className="ui horizontal segments container">
          <div className="ui center aligned green segment">
            <h5 className="ui header">Enter text to translate:</h5>
            <textarea
              value={text}
              onChange={(evt) => {
                setText(evt.target.value);
              }}
            />
          </div>
          <div className="ui center aligned yellow segment container">
              <Dropdown
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
                title="Select your language:"
              />
              <Dropdown
                options={options}
                selected={translateTo}
                onSelectedChange={setTranslateTo}
                title="Translate to:"
              />
          </div>
          <div className="ui center aligned blue segment container">
            <h5 className="ui  header">Translation to {translateTo.label}:</h5>
            <Convert
              text={text}
              language={language}
              translateTo={translateTo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Translate;
