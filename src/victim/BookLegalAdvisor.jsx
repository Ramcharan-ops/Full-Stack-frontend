import { useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import QuickExit from "../components/QuickExit";
import "../styles/dashboard.css";
import "../styles/auth.css";

function BookLegalAdvisor() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    victimEmail: user?.email || "",
    type: "LEGAL_ADVISOR",
    appointmentDate: "",
    appointmentTime: "",
    issueSummary: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/appointments/book", form);
      setMessage(res.data);
      setForm({
        victimEmail: user?.email || "",
        type: "LEGAL_ADVISOR",
        appointmentDate: "",
        appointmentTime: "",
        issueSummary: "",
      });
    } catch (error) {
      console.log(error);
      setMessage("Failed to book legal advisor session");
    }
  };

  return (
    <div className="dashboard-page">
      <Sidebar role="VICTIM" />

      <div className="main-content">
        <div className="dashboard-header">
          <h1>Book Legal Advisor Session</h1>
          <p>Schedule a session with a legal advisor for help with rights and case support.</p>
        </div>

        <div style={{ maxWidth: "560px" }}>
          <div className="auth-card" style={{ maxWidth: "100%" }}>
            <form onSubmit={handleSubmit}>
              <input
                type="date"
                name="appointmentDate"
                value={form.appointmentDate}
                onChange={handleChange}
                required
              />
              <input
                type="time"
                name="appointmentTime"
                value={form.appointmentTime}
                onChange={handleChange}
                required
              />
              <textarea
                name="issueSummary"
                placeholder="Legal Issue Summary"
                value={form.issueSummary}
                onChange={handleChange}
                required
                rows="4"
              />
              <button type="submit">Book Session</button>
            </form>

            {message && (
              <div className={String(message).toLowerCase().includes("fail") ? "error-text" : "success-text"}>
                {String(message)}
              </div>
            )}
          </div>
        </div>
      </div>

      <QuickExit floating />
    </div>
  );
}

export default BookLegalAdvisor;