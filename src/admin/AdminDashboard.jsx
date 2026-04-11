import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard-page">
      <Sidebar role="ADMIN" />

      <div className="main-content">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>
            Welcome, {user?.name}. Manage platform activity, complaints,
            support flow, and safety information.
          </p>
        </div>

        <div className="stats-row">
          <div className="stat-card stat-one">
            <h3>Emergency</h3>
            <p>112</p>
          </div>

          <div className="stat-card stat-two">
            <h3>Women Helpline</h3>
            <p>181</p>
          </div>

          <div className="stat-card stat-three">
            <h3>Legal Aid</h3>
            <p>15100</p>
          </div>
        </div>

        <h2 className="section-title">Admin Actions</h2>

        <div className="dashboard-cards">
          <Link to="/admin/complaints" className="dashboard-card card-complaint">
            <div>
              <h3>Manage Complaints</h3>
              <p>View all complaints and update their status.</p>
            </div>
          </Link>
        </div>

        <h2 className="section-title" style={{ marginTop: "30px" }}>
          Security, Escalation & Resource Oversight
        </h2>

        <div className="info-grid">
          <div className="info-card">
            <h3>Platform Security Priorities</h3>
            <ul>
              <li>Keep complaint and appointment data confidential.</li>
              <li>Allow access only according to role.</li>
              <li>Review pending and urgent complaints regularly.</li>
              <li>Maintain safe handling of victim information.</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Emergency Escalation</h3>
            <p><strong>National Emergency:</strong> 112</p>
            <p><strong>Women Helpline:</strong> 181</p>
            <p>
              Urgent complaints should be flagged quickly and directed to the
              appropriate response flow.
            </p>
          </div>

          <div className="info-card">
            <h3>Legal Support Awareness</h3>
            <ul>
              <li>Women are eligible for free legal aid.</li>
              <li>Domestic violence support can involve police, Protection Officers, shelter homes, and medical facilities.</li>
              <li>Ensure correct referral to counsellor or legal advisor.</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Admin Resource Responsibilities</h3>
            <ul>
              <li>Keep emergency numbers updated.</li>
              <li>Keep rights-awareness content visible.</li>
              <li>Track complaint statuses and appointment pipelines.</li>
              <li>Support timely service coordination.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;