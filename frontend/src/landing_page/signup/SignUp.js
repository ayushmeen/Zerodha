import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/signup", {
        username,
        email,
        password
      });

      setMsg(res.data.message || "Signup successful");

      if (res.data.success === true) {
        setTimeout(() => {
          window.location.href = "http://localhost:3000/dashboard";
        }, 1000);
      }
    } catch (error) {
      setMsg("Signup failed");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-3">Signup</h3>

      {/* ✅ Dismissible Alert */}
      {msg && (
        <div className="alert alert-info alert-dismissible fade show" role="alert">
          {msg}
          <button
            type="button"
            className="btn-close"
            onClick={() => setMsg("")}
            aria-label="Close"
          ></button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn btn-primary w-100">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
