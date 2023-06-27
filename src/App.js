import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import React, { useState } from "react";

import { generatePassword, getStrengthValue } from "./helper.js";

function App() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [checkboxData, setCheckboxData] = useState([
    { label: "Include Numbers", state: false },
    { label: "Include SmallerCase Characters", state: false },
    { label: "Include Special Characters", state: false },
    { label: "Include UpperCase Characters", state: false },
  ]);
  const [passwordLength, setPasswordLength] = useState(4);
  const [strength, setStrength] = useState('Very POOR');

  const handleGeneratePassword = (checkboxData, passwordLength) => {
    const isError = checkboxData.some((checkbox) => checkbox.state);
    setError(!isError);
    if (isError) {
      setPassword(generatePassword(checkboxData, passwordLength));
      setStrength(getStrengthValue(passwordLength))
    }

    setTimeout(() => {
      setError(error);
      // setPassword('');
    }, 1000);
  };

  return (
    <div className="App">
      <div className="App-header">
        <div className="passwordGeneratorContainer">
          <Header password={password} setPassword={setPassword} />
          <Body
            checkboxData={checkboxData}
            error={error}
            strength={strength}
            setCheckboxData={setCheckboxData}
            passwordLength={passwordLength}
            setPasswordLength={setPasswordLength}
          />
          <button
            className="Button genBtn"
            onClick={() => handleGeneratePassword(checkboxData, passwordLength)}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
