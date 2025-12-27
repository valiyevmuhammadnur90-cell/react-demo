import { useMutation } from "@tanstack/react-query";
import { authorization } from "../../services/service";
import { message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const authMutation = useMutation({
    mutationFn: authorization,
    onSuccess: () => {
      message.success("Login was successfully!");
      navigate("/");
    },
  });
  const onFinish = () => {
    authMutation.mutate(formData);
  };

  return (
    <div className="page">
      {/* Background blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      {/* Login Card */}
      <div className="login-card">
        <h2>Quiz Login</h2>

        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button onClick={onFinish}>Start Quiz</button>
      </div>
    </div>
  );
}

export default Login;
