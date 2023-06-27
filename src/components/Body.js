import React from "react";
import "./Body.scss";

const Body = ({
  checkboxData,
  error,
  setCheckboxData,
  passwordLength,
  strength,
  setPasswordLength,
}) => {
  const handleCheckbox = (index) => {
    const updateCheckbox = [...checkboxData];
    updateCheckbox[index].state = !updateCheckbox[index].state;
    setCheckboxData(updateCheckbox);
  };

  return (
    <section>
      <div className="lengthContainer">
        <div className="lengthText">Password Length</div>
        <input
          type="range"
          className="lengthInput"
          min={4}
          max={20}
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
        <div className="lengthValue">{passwordLength}</div>
      </div>
      <div className="checkboxContainer">
        <div className="checkboxOptions">
          {checkboxData.map((checkbox, index) => {
            return (
              <div className="optionContainer" key={index}>
                <input
                  className="optionInput"
                  type="checkbox"
                  id={`option${index}`}
                  value={checkbox.label}
                  onChange={() => handleCheckbox(index)}
                />
                <label className="optionLabel" htmlFor={`option${index}`}>
                  {checkbox.label}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      {error ? (
        <div className="ErrorContainer">
          Error: <strong>Please Select a Given Option !</strong>
        </div>
      ) : null}
      <div className="strengthContainer">
        <div className="strengthSub">
          <div className="strengthText">Strength</div>
          <div className="strengthValue">
            {strength}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
