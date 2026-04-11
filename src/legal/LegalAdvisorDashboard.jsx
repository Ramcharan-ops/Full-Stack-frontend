import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function LegalAdvisorDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard-page">
      <Sidebar role="LEGAL_ADVISOR" />

      <div className="main-content">
        <div className="dashboard-header">
          <h1>Legal Advisor Dashboard</h1>
          <p>
            Welcome, {user?.name}. Provide legal guidance and support to victims.
          </p>
        </div>

        <div className="stats-row">
          <div className="stat-card stat-one">
            <h3>Emergency Help</h3>
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

        <h2 className="section-title">Legal Actions</h2>

        <div className="dashboard-cards">
          <Link to="/legal/appointments" className="dashboard-card card-legal">
            <div>
              <h3>View Appointments</h3>
              <p>See all legal advisor appointments booked by victims.</p>
            </div>
          </Link>
        </div>

        <h2 className="section-title" style={{ marginTop: "30px" }}>
          Legal Rights & Assistance Information
        </h2>

        <div className="info-grid">
          <div className="info-card">
            <h3>Key Legal Contacts</h3>
            <p><strong>Emergency Response:</strong> 112</p>
            <p><strong>Women Helpline:</strong> 181</p>
            <p><strong>Legal Aid:</strong> 15100</p>
          </div>

          <div className="info-card">
            <h3>Legal Rights Awareness</h3>
            <ul>
              <li>Women can seek legal protection against domestic violence.</li>
              <li>Women can seek legal support and protection measures.</li>
              <li>Women are entitled to free legal aid.</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Support Pathways</h3>
            <ul>
              <li>Guide victims on filing and follow-up steps.</li>
              <li>Explain documentation and evidence handling carefully.</li>
              <li>Coordinate with police, Protection Officers, and service providers where appropriate.</li>
              <li>Refer urgent cases immediately through emergency channels.</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Educational Resources</h3>
            <ul>
              <li>Explain what domestic violence legally includes.</li>
              <li>Explain the value of preserving records and evidence if safe.</li>
              <li>Encourage victims to use legal aid and support systems early.</li>
              <li>Promote awareness of support services and referral mechanisms.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalAdvisorDashboard;