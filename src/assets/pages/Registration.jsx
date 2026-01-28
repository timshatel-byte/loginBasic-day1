import { useState } from "react";

function Registration({ onNavigate, onRegisterSuccesful }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const emailExists = existingUsers.some((user) => user.email === formData.email);
    if (emailExists) {
      alert("Email already registered");
      return;
    }

    // Save new user (without confirmPassword)
    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password
    };

    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Registration successful! You can now login.");
    setFormData({ name: "", email: "", password: "", });
    onNavigate("login");
  };

  return (
    <div className="register-container">
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>

      <br />

      <button onClick={() => onNavigate("login")}>Go to Login</button>
    </div>
  );
}

export default Registration;
