import React, { useState, useEffect, useRef } from "react";

function Dropdown({ title, options, selected, onSelectedChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    function onBodyClick(evt) {
      if (ref.current.contains(evt.target)) {
        return;
      }
      setOpen(false);
    }

    document.body.addEventListener("click", onBodyClick, true);

    return () => {
      document.body.removeEventListener("click", onBodyClick, true);
    };
  }, []);
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    } else {
      return (
        <div
          key={option.value}
          className="item"
          onClick={() => {
            onSelectedChange(option);
          }}
        >
          {option.label}
        </div>
      );
    }
  });
  return (
    <div ref={ref}>
      <div className="ui form">
        <div className="field">
          <label className="label">{title}</label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
