import "./App.css";
import Password from "./components/PasswordField";
import {
  containsConsecutiveCharacters,
  containsNumerals,
  containsSpecialCharacters,
  containsUppercaseLetter,
} from "./components/PasswordField/validations/functions";

function App() {
  const minimumLength = (password: string) => password.length > 8;

  const validations = [
    { title: "Has at least 8 characters", validation: minimumLength },
    { title: "Has a number 0-9", validation: containsNumerals },
    { title: "Has a special character", validation: containsSpecialCharacters },
    { title: "Has uppercase letter", validation: containsUppercaseLetter },
    {
      title: "Has no consecutive characters",
      validation: containsConsecutiveCharacters,
    },
  ];

  return (
    <div className="App">
      <h2>Password Component</h2>
      <Password validations={validations} />
    </div>
  );
}

export default App;
