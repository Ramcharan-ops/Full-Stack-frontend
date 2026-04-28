import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/admin/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this unauthorized user?")) {
      try {
        await api.delete(`/admin/users/${userId}`);
        setUsers(users.filter((u) => u.id !== userId));
      } catch (err) {
        console.error("Error deleting user", err);
        alert("Failed to delete user.");
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "15px" }}>
                  <p className="complaint-date" style={{ margin: 0 }}>Joined: {new Date(u.id).toLocaleDateString()}</p>
                  {u.role !== "ADMIN" && (
                    <button 
                      onClick={() => handleDelete(u.id)}
                      style={{ background: "#ef4444", color: "white", border: "none", padding: "6px 12px", borderRadius: "8px", cursor: "pointer", fontSize: "12px", fontWeight: "bold" }}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminUsers;
