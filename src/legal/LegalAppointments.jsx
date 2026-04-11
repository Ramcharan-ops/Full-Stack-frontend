import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function LegalAppointments() {
  const [appointments, setAppointments] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await api.get("/appointments/type/LEGAL_ADVISOR");
      setAppointments(res.data);
    } catch (error) {
      console.log("Error fetching legal appointments");
    }
  };

  return (
    <div className="dashboard-page">
      <Sidebar role="LEGAL_ADVISOR" />

      <div className="main-content">
        <div className="dashboard-header">
          <h1>Legal Advisor Appointments</h1>
          <p>Welcome, {user?.name}. View and manage legal support sessions.</p>
        </div>

        {appointments.length === 0 ? (
          <p className="empty-text">No legal advisor appointments found</p>
        ) : (
          <div className="track-grid">
            {appointments.map((a) => (
              <div key={a.id} className="complaint-card">
                <h3 className="complaint-title">Legal Support Session</h3>

                <p className="complaint-desc">
                  <strong>Victim Email:</strong> {a.victimEmail}
                </p>

                <p className="complaint-desc">
                  <strong>Issue Summary:</strong> {a.issueSummary}
                </p>

                <p className="complaint-desc">
                  <strong>Date:</strong> {a.appointmentDate}
                </p>

                <p className="complaint-desc">
                  <strong>Time:</strong> {a.appointmentTime}
                </p>

                <p className="complaint-status-row">
                  <strong>Status:</strong>
                  <span className={`status-badge ${a.status.toLowerCase()}`}>
                    {a.status}
                  </span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LegalAppointments;