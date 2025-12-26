function Login() {
  return (
    <div className="page">
      {/* Background blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      {/* Login Card */}
      <div className="login-card">
        <h2>Quiz Login</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Start Quiz</button>
      </div>
    </div>
  );
}

export default Login;
