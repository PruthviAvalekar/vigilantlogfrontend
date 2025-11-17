import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import "../styles/auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    deviceName: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", formData);
    navigate("/landing");
  };

  return (
    <div className="auth-root">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p className="muted">Sign in to monitor & secure your system</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {/* Email */}
          <label className="field">
            <span className="label">Email</span>
            <div className="input-wrap">
              <Mail className="icon" />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </label>

          {/* Password */}
          <label className="field">
            <span className="label">Password</span>
            <div className="input-wrap">
              <Lock className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword((s) => !s)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </label>

          {/* Device Name */}
          <label className="field">
            <span className="label">Device Name</span>
            <div className="input-wrap">
              <input
                name="deviceName"
                placeholder="Enter exact Windows device name"
                value={formData.deviceName}
                onChange={handleChange}
                required
              />
            </div>
          </label>

          <button className="submit-btn" type="submit">
            <span>Sign In</span>
            <ArrowRight className="arrow" />
          </button>
        </form>

        <div className="auth-footer">
          <span>
            Don't have an account?{" "}
            <button className="link-btn" onClick={() => navigate("/register")}>
              Sign up
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
