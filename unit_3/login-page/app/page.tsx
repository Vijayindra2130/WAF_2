
"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordCheck =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9\s]).{8,}$/;

    if (!emailCheck.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (!passwordCheck.test(password)) {
      setMessage(
        "Password needs 8 characters, uppercase, lowercase, number and special character."
      );
      return;
    }

    setMessage("Your details passed validation!");
  }

  return (
    <main className="page">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="logo">✦</div>

        <p className="welcome">WELCOME BACK</p>
        <h1>Sign in</h1>
        <p className="subtitle">Enter your details to continue.</p>

        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage("");
          }}
          required
        />

        <div className="password-label">
          <label htmlFor="password">Password</label>
          <span>Secure login</span>
        </div>

        <div className="password-field">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setMessage("");
            }}
            required
          />

          <button
            type="button"
            className="show-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="requirements">
          <p>Password requirements</p>
          <span>✓ At least 8 characters</span>
          <span>✓ Uppercase and lowercase letters</span>
          <span>✓ One number and special character</span>
        </div>

        <button type="submit" className="submit-btn">
          Sign in <span>→</span>
        </button>

        {message && <p className="message">{message}</p>}

        <p className="footer">Protected with input validation</p>
      </form>
    </main>
  );
}
