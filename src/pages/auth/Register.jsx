import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";
import "../../styles/auth.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "VICTIM",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveEmailToLocalList = (email) => {
    const existingEmails = JSON.parse(localStorage.getItem("emails")) || [];

    if (!existingEmails.includes(email)) {
      existingEmails.push(email);
      localStorage.setItem("emails", JSON.stringify(existingEmails));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/register", form);
      const successMsg = res.data?.message || res.data;
      setMessage(typeof successMsg === "string" ? successMsg : "Registration successful");

      saveEmailToLocalList(form.email);

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.response?.data || "Registration failed";
      setMessage(typeof errorMsg === "string" ? errorMsg : "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-icon">S</div>
        <h2>Create Account</h2>
        <p className="auth-subtitle">
          Register securely to file complaints, book support sessions, and track updates.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Create Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <select name="role" onChange={handleChange} value={form.role}>
            <option value="VICTIM">Victim/Survivor</option>
            <option value="COUNSELLOR">Counsellor</option>
            <option value="LEGAL_ADVISOR">Legal Advisor</option>
            <option value="ADMIN">Admin</option>
          </select>

          <button type="submit">Register</button>
        </form>

        {message && (
          <div
            className={
              String(message).toLowerCase().includes("success")
                ? "success-text"
                : "error-text"
            }
          >
            {String(message)}
          </div>
        )}

        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;