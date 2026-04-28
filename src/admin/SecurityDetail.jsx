import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function SecurityDetail() {
  const { metric } = useParams();
  const navigate = useNavigate();

  // Format the metric name for display
  const title = metric.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="dashboard-page">
      <Sidebar role="ADMIN" />

      <div className="main-content">
        <div className="dashboard-header">
          <h1>{title} Configuration</h1>
          <p>Detailed settings and logs for {title}.</p>
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
              <h3>System Status</h3>
              <div className="info-badge">Active & Secured</div>
              <p>All automated checks for <strong>{title}</strong> are passing.</p>
              <p style={{ marginTop: "10px" }}>Last scan: Just now</p>
           </div>
           
           {/* Custom Config Options based on metric */}
           {metric === "data-encryption" && (
             <div className="info-card">
                <h3>Encryption Settings</h3>
                <p style={{ marginBottom: "10px" }}><strong>Algorithm:</strong> AES-256-GCM</p>
                <p style={{ marginBottom: "10px" }}><strong>Key Rotation:</strong> Every 90 Days</p>
                <p style={{ marginBottom: "10px" }}><strong>Data at Rest:</strong> Encrypted</p>
                <button 
                  className="logout-btn" 
                  style={{ background: "#ec4899", marginTop: "10px", width: "100%", padding: "10px" }}
                  onClick={() => alert('Key rotation initiated successfully! New AES-256 keys generated.')}
                >
                  Force Key Rotation
                </button>
             </div>
           )}

           {metric === "ssl-certificate" && (
             <div className="info-card">
                <h3>Certificate Details</h3>
                <p style={{ marginBottom: "10px" }}><strong>Provider:</strong> Let's Encrypt Authority X3</p>
                <p style={{ marginBottom: "10px" }}><strong>Valid Until:</strong> October 24, 2026</p>
                <p style={{ marginBottom: "10px" }}><strong>Auto-Renew:</strong> Enabled (14 days prior)</p>
                <button 
                  className="logout-btn" 
                  style={{ background: "#8b5cf6", marginTop: "10px", width: "100%", padding: "10px" }}
                  onClick={() => alert('Certificate verified! Status: Valid and active.')}
                >
                  Verify Certificate
                </button>
             </div>
           )}

           {metric === "anonymity-layer" && (
             <div className="info-card">
                <h3>Privacy Routing</h3>
                <p style={{ marginBottom: "10px" }}><strong>Proxy Nodes:</strong> 12 Active Nodes</p>
                <p style={{ marginBottom: "10px" }}><strong>IP Masking:</strong> Strict Mode</p>
                <p style={{ marginBottom: "10px" }}><strong>Tor Routing:</strong> Disabled</p>
                <button 
                  className="logout-btn" 
                  style={{ background: "#0ea5e9", marginTop: "10px", width: "100%", padding: "10px" }}
                  onClick={() => alert('Routing table flushed! Rebuilding anonymous paths...')}
                >
                  Flush Routing Table
                </button>
             </div>
           )}

           {metric === "access-control" && (
             <div className="info-card">
                <h3>Access Policies</h3>
                <p style={{ marginBottom: "10px" }}><strong>Role-Based Access:</strong> Enforced</p>
                <p style={{ marginBottom: "10px" }}><strong>MFA Requirement:</strong> Admins & Counsellors</p>
                <p style={{ marginBottom: "10px" }}><strong>Session Timeout:</strong> 30 Minutes</p>
                <button 
                  className="logout-btn" 
                  style={{ background: "#3b82f6", marginTop: "10px", width: "100%", padding: "10px" }}
                  onClick={() => navigate('/admin/users')}
                >
                  Review Admin Roles
                </button>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}

export default SecurityDetail;
