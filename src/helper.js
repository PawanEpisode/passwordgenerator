export const generatePassword = (checkboxData, passwordLength) => {
  let charSet = "";
  let uniquePassword = "";

  checkboxData.forEach((checkbox) => {
    if (checkbox.state) {
      switch (checkbox.label) {
        case "Include Numbers":
          charSet += "0123456789";
          break;
        case "Include SmallerCase Characters":
          charSet += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Special Characters":
          charSet += "!@#$%^&*()_+<>?{}|[]";
          break;
        case "Include UpperCase Characters":
          charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        default:
          break;
      }
    }
  });
  for (let i = 0; i < passwordLength; i++) {
    const randIndex = Math.floor(Math.random() * charSet.length);
    uniquePassword += charSet[randIndex];
  }

  return uniquePassword;
};

export const getStrengthValue = (passwordLength) => {
  let strength = "";
  if (passwordLength >= 19) {
    strength += "UNIQUE !!!";
  } else if (passwordLength >= 16) {
    strength += "EXCELLENT";
  } else if (passwordLength >= 13) {
    strength += "Very GOOD";
  } else if (passwordLength >= 10) {
    strength += "GOOD";
  } else if (passwordLength >= 7) {
    strength += "POOR";
  } else if (passwordLength >= 4) {
    strength += "Very POOR";
  }
  return strength;
};
