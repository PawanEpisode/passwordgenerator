import React, { useState } from "react";
import "./Header.scss";

const Header = ({ password,setPassword }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setPassword('');
      setCopied(false);
    }, 1000);
  };
  return (
    <header>
      <div className="passwordGeneratorContainerHeader">
        {password ? <div className="uniquepassword">{password}</div>: <div className="placeholder">Unique Password</div> }
        <button className="Button copyBtn" onClick={handleCopy}>
          {copied ? "copied" : "copy"}
        </button>
      </div>
    </header>
  );
};

export default Header;
