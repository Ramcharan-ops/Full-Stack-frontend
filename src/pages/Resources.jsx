import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import QuickExit from "../components/QuickExit";
import "../styles/dashboard.css";

function Resources() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await api.get("/resources");
        setResources(res.data);
      } catch (err) {
        console.error("Error fetching resources");
      } finally {
        setLoading(false);
      }
    };
    fetchResources();
  }, []);

  return (
    <div className="dashboard-page">
      <Sidebar role={user?.role} />

      <div className="main-content">
        <div className="dashboard-header">
          <h1>Resources & Support</h1>
          <p>Explore safe information on legal rights, health, and empowerment.</p>
        </div>

        {loading ? (
          <p className="empty-text">Loading resources...</p>
        ) : (
          <div className="info-grid">
            {resources.map((res) => (
              <div key={res.id} className="info-card">
                <span className="info-badge">{res.category}</span>
                <h3>{res.title}</h3>
                <p>{res.content}</p>
              </div>
            ))}
          </div>
        )}

        <div className="section-title" style={{ marginTop: "40px" }}>Important Contacts</div>
        <div className="info-grid">
           <a 
            href="https://ncw.nic.in/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="info-card clickable-card" 
            style={{ borderLeft: "4px solid #7c3aed", textDecoration: "none", color: "inherit" }}
           >
              <h3>National Women Helpline</h3>
              <p>Call **181** for immediate support and referral.</p>
              <div style={{ marginTop: "10px", fontSize: "12px", color: "#7c3aed", fontWeight: "600" }}>Visit Website →</div>
           </a>

           <a 
            href="https://112.gov.in/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="info-card clickable-card" 
            style={{ borderLeft: "4px solid #ef4444", textDecoration: "none", color: "inherit" }}
           >
              <h3>Emergency Services</h3>
              <p>Call **112** for police and medical emergency help.</p>
              <div style={{ marginTop: "10px", fontSize: "12px", color: "#ef4444", fontWeight: "600" }}>Visit Website →</div>
           </a>

           <a 
            href="https://nalsa.gov.in/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="info-card clickable-card" 
            style={{ borderLeft: "4px solid #0ea5e9", textDecoration: "none", color: "inherit" }}
           >
              <h3>Legal Aid Helpline</h3>
              <p>Call **15100** for free legal consultation.</p>
              <div style={{ marginTop: "10px", fontSize: "12px", color: "#0ea5e9", fontWeight: "600" }}>Visit Website →</div>
           </a>
        </div>
      </div>

      {user?.role === "VICTIM" && <QuickExit floating />}
    </div>
  );
}

export default Resources;
