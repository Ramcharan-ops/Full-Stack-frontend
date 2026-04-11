import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import QuickExit from "../components/QuickExit";
import "../styles/dashboard.css";

function VictimDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard-page">
      <Sidebar role="VICTIM" />

      <div className="main-content">
        <div className="dashboard-header">
          <h1>Victim Dashboard</h1>
          <p>
            Welcome, {user?.name}. Access support, file complaints, and connect
            with counsellors and legal advisors in one safe place.
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

        <h2 className="section-title">Take Action</h2>

        <div className="dashboard-cards">
          <Link to="/victim/file-complaint" className="dashboard-card card-complaint">
            <div>
              <h3>File Complaint</h3>
              <p>Report your issue securely and start getting support immediately.</p>
            </div>
          </Link>

          <Link to="/victim/book-counsellor" className="dashboard-card card-counsellor">
            <div>
              <h3>Book Counsellor</h3>
              <p>Schedule a counselling session for emotional support and guidance.</p>
            </div>
          </Link>

          <Link to="/victim/book-legal" className="dashboard-card card-legal">
            <div>
              <h3>Book Legal Advisor</h3>
              <p>Connect with a legal advisor for help with rights and case support.</p>
            </div>
          </Link>

          <Link to="/victim/track" className="dashboard-card card-track">
            <div>
              <h3>Track Complaints</h3>
              <p>View complaint history and monitor the latest status updates.</p>
            </div>
          </Link>
        </div>

        <h2 className="section-title" style={{ marginTop: "30px" }}>
          Safety, Rights & Support
        </h2>

        <div className="info-grid">
          <div className="info-card">
            <h3>Emergency Contacts</h3>
            <p><strong>Emergency Response:</strong> 112</p>
            <p><strong>Women Helpline:</strong> 181</p>
            <p><strong>Legal Aid Helpline:</strong> 15100</p>
            <span className="info-badge">India Support</span>
          </div>

          <div className="info-card">
            <h3>Immediate Safety Steps</h3>
            <ul>
              <li>Move to a safer place if you are in immediate danger.</li>
              <li>Call 112 for urgent help.</li>
              <li>Keep ID cards, phone, money, and key documents ready.</li>
              <li>Share your situation with a trusted person if possible.</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Know Your Rights</h3>
            <ul>
              <li>You can seek protection from domestic violence.</li>
              <li>You can approach police, Protection Officers, service providers, and Magistrates.</li>
              <li>You can seek shelter, medical help, counselling, and legal support.</li>
              <li>Women are eligible for free legal aid.</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Educational Resources</h3>
            <ul>
              <li>Understand signs of physical, emotional, verbal, sexual, and economic abuse.</li>
              <li>Preserve messages, photos, recordings, or medical papers if safe.</li>
              <li>Use legal aid and support services early.</li>
              <li>Follow up on complaint and appointment status regularly.</li>
            </ul>
          </div>
        </div>
      </div>

      <QuickExit floating />
    </div>
  );
}

export default VictimDashboard;