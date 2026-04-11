import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function CounsellorDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard-page">
      <Sidebar role="COUNSELLOR" />

      <div className="main-content">
        <div className="dashboard-header">
          <h1>Counsellor Dashboard</h1>
          <p>
            Welcome, {user?.name}. Support victims through counselling sessions
            and safe guidance.
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
            <h3>Support Care</h3>
            <p>Active</p>
          </div>
        </div>

        <h2 className="section-title">Counsellor Actions</h2>

        <div className="dashboard-cards">
          <Link to="/counsellor/appointments" className="dashboard-card card-counsellor">
            <div>
              <h3>View Appointments</h3>
              <p>See all counselling appointments booked by victims.</p>
            </div>
          </Link>
        </div>

        <h2 className="section-title" style={{ marginTop: "30px" }}>
          Counselling Guidance & Crisis Support
        </h2>

        <div className="info-grid">
          <div className="info-card">
            <h3>Support Priorities</h3>
            <ul>
              <li>Listen without judgment.</li>
              <li>Respect confidentiality and dignity.</li>
              <li>Encourage immediate safety planning when risk is high.</li>
              <li>Document follow-up needs clearly.</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Emergency Referral Info</h3>
            <p><strong>Emergency Response:</strong> 112</p>
            <p><strong>Women Helpline:</strong> 181</p>
            <p>
              Use urgent referral routes when there is immediate danger,
              medical need, or escalation risk.
            </p>
          </div>

          <div className="info-card">
            <h3>Protection & Support Network</h3>
            <ul>
              <li>Women Helpline can connect callers with emergency support and help centers.</li>
              <li>Shelter and medical support are part of the response framework.</li>
              <li>Coordinate with admin and legal teams when needed.</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Educational Guidance</h3>
            <ul>
              <li>Help victims recognize abuse patterns.</li>
              <li>Encourage healthy coping and emotional recovery steps.</li>
              <li>Promote follow-up with legal and support services.</li>
              <li>Refer high-risk cases for urgent intervention.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounsellorDashboard;