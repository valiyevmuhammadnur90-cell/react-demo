import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import register from "../../services/service";
import { message } from "antd";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const regMutation = useMutation({
    mutationFn: register,
    onSuccess: () => {
      message.success("Account created successfully!");
      navigate("/");
    },
  });
  const onFinish = () => {
    regMutation.mutate(formData);
  };

  return (
    <div className="signup-page">
      <div className="ring ring-1"></div>
      <div className="ring ring-2"></div>
      <div className="ring ring-3"></div>

      <div className="signup-card">
        <h2>Create Account</h2>

        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button onClick={onFinish}>Join the Quiz</button>

        <p className="hint">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
