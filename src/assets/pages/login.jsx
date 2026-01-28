import { useState } from "react";

function Login({ onNavigate, onLogin }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user with matching email and password
    const user = users.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );

    if (user) {
      alert("Login successful!");
      localStorage.setItem("currentUser", JSON.stringify(user));
      setLoginData({ email: "", password: "" });
      onLogin();
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="register-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>

      <br />

      <button onClick={() => onNavigate("register")}>Go to Register</button>
    </div>
  );
}

export default Login;
