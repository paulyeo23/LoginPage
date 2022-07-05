import { useState } from "react";
import { Button } from "react-bootstrap";

const Username = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  function username(e) {
    console.log(usernameInput);
    setUsernameInput(e.target.value);
  }

  function password(e) {
    console.log(passwordInput);
    setPasswordInput(e.target.value);
  }

  const handleSubmit = () => {
    console.log("submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        autoFocus
        value={usernameInput}
        onChange={username}
      />
      <input type="text" required value={passwordInput} onChange={password} />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Username;
