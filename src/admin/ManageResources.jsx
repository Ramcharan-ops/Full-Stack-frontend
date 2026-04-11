import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";
import "../styles/auth.css";

function ManageResources() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [resources, setResources] = useState([]);
  const [form, setForm] = useState({ category: "LEGAL", title: "", content: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    const res = await api.get("/resources");
    setResources(res.data);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.post("/resources", form);
      setMessage("Resource added successfully!");
      setForm({ category: "LEGAL", title: "", content: "" });
      fetchResources();
    } catch (err) {
      setMessage("Failed to update resource");
    }
  };

  return (
    <div className="dashboard-page">
      <Sidebar role={user?.role} />

      <div className="main-content">
        <div className="dashboard-header">
          <h1>Content Management</h1>
          <p>Update legal rights, support information, and empowerment resources.</p>
        </div>

        <div className="info-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
           <div className="auth-card" style={{ maxWidth: "100%" }}>
              <h2>Add New Resource</h2>
              <form onSubmit={handleUpdate}>
                 <select value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
                    <option value="LEGAL">Legal Rights</option>
                    <option value="HEALTH">Health Risks</option>
                    <option value="SUPPORT">Support Service</option>
                    <option value="EQUALITY">Gender Equality</option>
                 </select>
                 <input placeholder="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
                 <textarea placeholder="Content details..." rows="6" value={form.content} onChange={e => setForm({...form, content: e.target.value})} required />
                 <button type="submit">Publish Resource</button>
              </form>
              {message && <p className="success-text">{message}</p>}
           </div>

           <div>
              <h2 className="section-title">Current Resources</h2>
              <div style={{ maxHeight: "500px", overflowY: "auto" }}>
                 {resources.map(r => (
                   <div key={r.id} className="info-card" style={{ marginBottom: "10px" }}>
                      <span className="status-badge booked">{r.category}</span>
                      <h4 style={{ margin: "8px 0" }}>{r.title}</h4>
                      <p style={{ fontSize: "12px" }}>{r.content.substring(0, 80)}...</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default ManageResources;
