import React, { useState } from "react";
import List from "./List"; 
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!nameRegex.test(name)) {
      setError("Name must be at least 2 letters.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Enter a valid email.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError("Password must be at least 6 characters long and include letters and numbers.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    setIsRegistered(true);
  };

  if (isRegistered) {
    return <List />;
  }

  return (
    <div className="login-container">
      <h2 className="title">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />
        <input
          className="input-field"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <input
          className="input-field"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        /><br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="button" type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
