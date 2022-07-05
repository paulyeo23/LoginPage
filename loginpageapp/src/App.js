import "./App.css";
import Username from "./Username";
import { useState } from "react";
function App() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  let handleSubmit = () => {
    console.log("submitted");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Login Page of Iz Bank</h2>
      </header>

      <Username />
    </div>
  );
}

export default App;
