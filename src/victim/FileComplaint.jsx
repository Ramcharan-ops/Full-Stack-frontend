import { useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import QuickExit from "../components/QuickExit";
import "../styles/dashboard.css";
import "../styles/auth.css";

function FileComplaint() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    title: "",
    description: "",
    victimEmail: user?.email || "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/complaints/file", form);
      setMessage(res.data);
      setForm({
        title: "",
        description: "",
        victimEmail: user?.email || "",
      });
    } catch (error) {
      console.log(error);
      setMessage("Failed to file complaint");
    }
  };

  return (
    <div className="dashboard-page">
      <Sidebar role="VICTIM" />

      <div className="main-content">
        <div className="dashboard-header">
          <h1>File Complaint</h1>
          <p>Report your issue securely. Your information is kept confidential.</p>
        </div>

        <div style={{ maxWidth: "560px" }}>
          <div className="auth-card" style={{ maxWidth: "100%" }}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Complaint Title"
                value={form.title}
                onChange={handleChange}
                required
              />
              <textarea
                name="description"
                placeholder="Describe your issue"
                value={form.description}
                onChange={handleChange}
                required
                rows="5"
              />
              <button type="submit">Submit Complaint</button>
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

export default FileComplaint;