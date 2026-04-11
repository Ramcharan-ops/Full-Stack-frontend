import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function ManageComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await api.get("/complaints/all");
      setComplaints(res.data);
    } catch (error) {
      console.log("Error fetching complaints");
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await api.put(`/complaints/${id}/status`, { status: newStatus });
      fetchComplaints();
    } catch (error) {
      console.log("Error updating status");
    }
  };

  return (
    <div className="dashboard-page">
      <Sidebar role="ADMIN" />

      <div className="main-content">
        <div className="dashboard-header">
          <h1>Manage Complaints</h1>
          <p>View all complaints and update their status.</p>
        </div>

        {complaints.length === 0 ? (
          <p className="empty-text">No complaints found</p>
        ) : (
          <div className="track-grid">
            {complaints.map((c) => (
              <div key={c.id} className="complaint-card">
                <h3 className="complaint-title">{c.title}</h3>
                <p className="complaint-desc">{c.description}</p>
                <p><strong>Victim:</strong> {c.victimEmail}</p>

                <p className="complaint-status-row">
                  <strong>Status:</strong>
                  <span className={`status-badge ${c.status.toLowerCase()}`}>
                    {c.status}
                  </span>
                </p>

                <select
                  className="status-select"
                  value={c.status}
                  onChange={(e) => handleStatusChange(c.id, e.target.value)}
                >
                  <option value="PENDING">PENDING</option>
                  <option value="IN_PROGRESS">IN_PROGRESS</option>
                  <option value="RESOLVED">RESOLVED</option>
                </select>

                <p className="complaint-date">
                  {new Date(c.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageComplaints;