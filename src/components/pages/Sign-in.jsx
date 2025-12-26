import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="signin-page">
      {/* Background shapes */}
      <div className="ring ring-1"></div>
      <div className="ring ring-2"></div>
      <div className="ring ring-3"></div>

      {/* Sign In Card */}
      <div className="signin-card">
        <h2>Create Account</h2>

        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Join the Quiz</button>

        <p className="hint">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
