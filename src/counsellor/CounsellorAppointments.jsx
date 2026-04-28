import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function CounsellorAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [note, setNote] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  const fetchAppointments = async () => {
    try {
      const res = await api.get("/appointments/type/COUNSELLOR");
      setAppointments(res.data);
    } catch (error) {
      console.log("Error fetching counsellor appointments", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchAppointments();
  }, []);

  const handleAddNote = async (id) => {
    try {
      await api.post(`/appointments/${id}/notes`, { note });
      alert("Progress note saved successfully!");
      setNote("");
      setSelectedId(null);
    } catch (err) {
      console.log(err);
      alert("Failed to save note");
    }
  };

  return (
    <div className="dashboard-page">
      <Sidebar role="COUNSELLOR" />

      <div className="main-content">
        <div className="dashboard-header">
          <h1>Counsellor Appointments & Progress</h1>
          <p>Welcome, {user?.name}. Monitor victim progress and provide guidance sessions.</p>
        </div>

        {appointments.length === 0 ? (
          <p className="empty-text">No counsellor appointments found</p>
        ) : (
          <div className="track-grid">
            {appointments.map((a) => (
              <div key={a.id} className="complaint-card">
                <h3 className="complaint-title">Counselling Session</h3>
                
                <p className="complaint-desc"><strong>Victim:</strong> {a.victimEmail}</p>
                <p className="complaint-desc"><strong>Issue:</strong> {a.issueSummary}</p>
                <p className="complaint-desc"><strong>Schedule:</strong> {a.appointmentDate} at {a.appointmentTime}</p>

                <div className="complaint-status-row">
                  <strong>Status:</strong>
                  <span className={`status-badge ${a.status.toLowerCase()}`}>
                    {a.status}
                  </span>
                </div>

                {selectedId === a.id ? (
                  <div style={{ marginTop: "15px" }}>
                    <textarea 
                      placeholder="Enter session notes / progress tracking..." 
                      className="status-select" 
                      style={{ height: "100px", resize: "none" }}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                       <button className="logout-btn" style={{ background: "#7c3aed" }} onClick={() => handleAddNote(a.id)}>Save Note</button>
                       <button className="logout-btn" style={{ background: "#64748b" }} onClick={() => setSelectedId(null)}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  <button 
                    className="logout-btn" 
                    style={{ background: "#7c3aed", marginTop: "15px" }}
                    onClick={() => setSelectedId(a.id)}
                  >
                    Add Progress Note
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CounsellorAppointments;