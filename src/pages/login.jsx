import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="register-container">
      <h2>Login</h2>

      <form>
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>

      <br />

      {/* LINK TO REGISTER */}
      <Link to="/register">
        <button>Go to Register</button>
      </Link>
    </div>
  );
}

export default Login;
