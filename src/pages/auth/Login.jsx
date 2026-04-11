import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";
import "../../styles/auth.css";

function Login() {
  const navigate = useNavigate();
  const savedEmails = JSON.parse(localStorage.getItem("emails")) || [];

  const [form, setForm] = useState({
    email: savedEmails.length > 0 ? savedEmails[0] : "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", form);
      const user = res.data;

      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "ADMIN") navigate("/admin");
      else if (user.role === "VICTIM") navigate("/victim");
      else if (user.role === "COUNSELLOR") navigate("/counsellor");
      else if (user.role === "LEGAL_ADVISOR") navigate("/legal");
    } catch (error) {
      setMessage("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-icon">S</div>
        <h2>Welcome Back</h2>
        <p className="auth-subtitle">
          Login to access support services, appointments, and complaint tracking.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            list="saved-emails"
            required
          />
          {savedEmails.length > 0 && (
            <datalist id="saved-emails">
              {savedEmails.map((email, index) => (
                <option key={index} value={email} />
              ))}
            </datalist>
          )}

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

        {message && <div className="error-text">{message}</div>}

        <p>
          New user? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;