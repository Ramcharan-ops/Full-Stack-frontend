import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/admin/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-page">
      <Sidebar role="ADMIN" />

      <div className="main-content">
        <div className="dashboard-header">
          <h1>User Management</h1>
          <p>Monitor all registered accounts and roles on the platform.</p>
        </div>

        {loading ? (
          <p className="empty-text">Loading users...</p>
        ) : (
          <div className="track-grid">
            {users.map((u) => (
              <div key={u.id} className="complaint-card">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                   <h3 className="complaint-title" style={{ margin: 0 }}>{u.name}</h3>
                   <span className="status-badge booked">{u.role}</span>
                </div>
                <p className="complaint-desc"><strong>Email:</strong> {u.email}</p>
                <p className="complaint-desc"><strong>Phone:</strong> {u.phone || "N/A"}</p>
                <p className="complaint-date">Joined: {new Date(u.id).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminUsers;
