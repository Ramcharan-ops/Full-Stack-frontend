import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function SecurityLogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for the specific log based on ID
  const logDetails = {
    "0": { 
      action: "User session encrypted", 
      time: "Just Now", ip: "192.168.1.104", status: "Success", 
      details: "AES-256 encryption applied to user session ID #98432.",
      extraWidget: "session"
    },
    "1": { 
      action: "Database backup scheduled", 
      time: "5m ago", ip: "Server-Internal", status: "Success", 
      details: "Automated daily snapshot triggered and stored in secure bucket.",
      extraWidget: "backup"
    },
    "2": { 
      action: "Admin login verified", 
      time: "18m ago", ip: "10.0.0.5", status: "Success", 
      details: "MFA verified successfully for Admin account.",
      extraWidget: "login"
    },
    "3": { 
      action: "Auto-cleanup of temporary logs", 
      time: "1h ago", ip: "System", status: "Success", 
      details: "Deleted 432 temporary files older than 30 days.",
      extraWidget: "cleanup"
    }
  };

  const log = logDetails[id] || { action: "Unknown Event", time: "Unknown", ip: "Unknown", status: "Unknown", details: "No details available for this log event." };

  return (
    <div className="dashboard-page">
      <Sidebar role="ADMIN" />

      <div className="main-content">
        <div className="dashboard-header">
          <h1>Log Event Details</h1>
          <p>In-depth security event analysis and metadata.</p>
        </div>

        <button 
          className="logout-btn" 
          style={{ width: "auto", background: "#64748b", marginBottom: "20px" }}
          onClick={() => navigate("/admin/security")}
        >
          &larr; Back to Security Dashboard
        </button>

        <div className="info-grid">
           <div className="info-card">
              <h3>Event Overview</h3>
              <div className={`info-badge ${log.status === 'Success' ? 'resolved' : 'pending'}`}>{log.status}</div>
              <p style={{ marginTop: "10px", fontSize: "18px", fontWeight: "600", color: "#1e1b4b" }}>{log.action}</p>
              <p style={{ marginTop: "10px" }}><strong>Timestamp:</strong> {log.time}</p>
              <p style={{ marginTop: "10px" }}><strong>Source IP:</strong> {log.ip}</p>
           </div>
           
           <div className="info-card">
              <h3>System Trace</h3>
              <p style={{ marginBottom: "10px", lineHeight: "1.6" }}>{log.details}</p>
              <p style={{ marginTop: "20px", color: "#64748b", fontSize: "12px" }}>Event ID: SEC-LOG-{Math.floor(Math.random() * 10000)}-{id}</p>
           </div>
        </div>

        {/* Custom Related Widgets based on log type */}
        {log.extraWidget === "backup" && (
          <div className="info-card" style={{ marginTop: "20px" }}>
            <h3>Backup Configuration</h3>
            <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
              <div style={{ padding: "15px", background: "#f8fafc", borderRadius: "10px", flex: 1 }}>
                <h4>Last Snapshot</h4>
                <p style={{ color: "#16a34a", fontWeight: "bold", fontSize: "20px", marginTop: "5px" }}>2.4 GB</p>
                <p style={{ fontSize: "12px", color: "#64748b" }}>Stored in AWS S3</p>
              </div>
              <div style={{ padding: "15px", background: "#f8fafc", borderRadius: "10px", flex: 1 }}>
                <h4>Next Backup</h4>
                <p style={{ color: "#2563eb", fontWeight: "bold", fontSize: "20px", marginTop: "5px" }}>23:55:00</p>
                <p style={{ fontSize: "12px", color: "#64748b" }}>Cron: 0 0 * * *</p>
              </div>
            </div>
            <button 
              className="logout-btn" 
              style={{ background: "#2563eb", marginTop: "15px", width: "100%" }}
              onClick={() => alert("Downloading Backup: suraksha-db-snapshot-2026.sql.gz")}
            >
              Download Latest Backup
            </button>
          </div>
        )}

        {log.extraWidget === "session" && (
          <div className="info-card" style={{ marginTop: "20px" }}>
            <h3>Active Session Metrics</h3>
            <p style={{ marginTop: "10px" }}><strong>Encryption Protocol:</strong> TLS 1.3 / AES-256</p>
            <p style={{ marginTop: "10px" }}><strong>Session Expiry:</strong> 2 hours</p>
            <button 
              className="logout-btn" 
              style={{ background: "#dc2626", marginTop: "15px", width: "100%" }}
              onClick={() => {
                alert("Session terminated securely.");
                navigate("/login");
              }}
            >
              Force Terminate Session
            </button>
          </div>
        )}

        {log.extraWidget === "login" && (
          <div className="info-card" style={{ marginTop: "20px" }}>
            <h3>Admin Access History</h3>
            <ul style={{ marginTop: "10px", listStyle: "none", padding: 0 }}>
              <li style={{ padding: "8px 0", borderBottom: "1px solid #eef2ff" }}>Today 10:45 AM - 10.0.0.5 - <strong>Success</strong></li>
              <li style={{ padding: "8px 0", borderBottom: "1px solid #eef2ff" }}>Yesterday 09:12 AM - 10.0.0.5 - <strong>Success</strong></li>
              <li style={{ padding: "8px 0", color: "#dc2626" }}>Yesterday 02:30 AM - 45.33.12.1 - <strong>Failed (Invalid MFA)</strong></li>
            </ul>
            <button 
              className="logout-btn" 
              style={{ background: "#f59e0b", marginTop: "15px", width: "100%" }}
              onClick={() => navigate("/admin/users")}
            >
              Require MFA Re-authentication
            </button>
          </div>
        )}

        {log.extraWidget === "cleanup" && (
          <div className="info-card" style={{ marginTop: "20px" }}>
            <h3>Storage Optimization</h3>
            <p style={{ marginTop: "10px" }}><strong>Space Freed:</strong> 145 MB</p>
            <p style={{ marginTop: "10px" }}><strong>Current Disk Usage:</strong> 45% (45GB / 100GB)</p>
            <div style={{ width: "100%", background: "#eef2ff", height: "10px", borderRadius: "5px", marginTop: "10px" }}>
              <div style={{ width: "45%", background: "#8b5cf6", height: "100%", borderRadius: "5px" }}></div>
            </div>
            <button 
              className="logout-btn" 
              style={{ background: "#10b981", marginTop: "15px", width: "100%" }}
              onClick={() => alert("Manual cleanup completed! 24MB of temporary cache cleared.")}
            >
              Run Manual Cleanup
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SecurityLogDetail;
