import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function SecurityDashboard() {
  const securityMetrics = [
    { label: "Data Encryption", status: "Active", color: "resolved" },
    { label: "SSL Certificate", status: "Valid", color: "resolved" },
    { label: "Anonymity Layer", status: "Secured", color: "resolved" },
    { label: "Access Control", status: "Strict", color: "booked" }
  ];

  const accessLogs = [
    { time: "Just Now", action: "User session encrypted", status: "Success" },
    { time: "5m ago", action: "Database backup scheduled", status: "Success" },
    { time: "18m ago", action: "Admin login verified", status: "Success" },
    { time: "1h ago", action: "Auto-cleanup of temporary logs", status: "Success" }
  ];

  return (
    <div className="dashboard-page">
      <Sidebar role="ADMIN" />

      <div className="main-content">
        <div className="dashboard-header">
          <h1>Security & Data Privacy</h1>
          <p>Core platform security oversight and real-time monitoring.</p>
        </div>

        <div className="stats-row">
           {securityMetrics.map(m => (
             <div key={m.label} className={`stat-card stat-${m.label === 'Data Encryption' ? 'one' : m.label === 'SSL Certificate' ? 'two' : 'three'}`} style={{ opacity: 0.9 }}>
                <h3>{m.label}</h3>
                <p>{m.status}</p>
             </div>
           ))}
        </div>

        <div className="info-grid" style={{ gridTemplateColumns: "2fr 1fr" }}>
           <div className="info-card">
              <h3>Real-time Access Logs</h3>
              <div style={{ marginTop: "15px" }}>
                 {accessLogs.map((log, i) => (
                   <div key={i} style={{ padding: "12px 0", borderBottom: i < accessLogs.length - 1 ? "1px solid #eef2ff" : "none", display: "flex", justifyContent: "space-between" }}>
                      <div>
                         <div style={{ fontWeight: "700", color: "#1e1b4b" }}>{log.action}</div>
                         <div style={{ fontSize: "12px", color: "#64748b" }}>{log.time}</div>
                      </div>
                      <span className="info-badge">Success</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="info-card">
              <h3>Security Protocols</h3>
              <p style={{ marginBottom: "10px" }}><strong>End-to-End:</strong> Compliant</p>
              <p style={{ marginBottom: "10px" }}><strong>Role Privacy:</strong> Enforced</p>
              <p><strong>GDPR/Privacy:</strong> Standardized</p>
              <div className="info-badge" style={{ marginTop: "15px", background: "#dcfce7", color: "#166534", width: "100%", textAlign: "center" }}>System Healthy</div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityDashboard;
