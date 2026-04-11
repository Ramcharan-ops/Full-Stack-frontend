import { Link, useNavigate, useLocation } from "react-router-dom";
import QuickExit from "./QuickExit";

/**
 * Reusable Sidebar component for all dashboard pages.
 * Dynamically renders nav links based on user role.
 */

const NAV_LINKS = {
  VICTIM: [
    { to: "/victim", label: "Home", icon: "🏠" },
    { to: "/resources", label: "Resources", icon: "📚" },
    { to: "/victim/file-complaint", label: "File Complaint", icon: "📝" },
    { to: "/victim/book-counsellor", label: "Counsellor Session", icon: "💬" },
    { to: "/victim/book-legal", label: "Legal Session", icon: "⚖️" },
    { to: "/victim/track", label: "Track Complaints", icon: "📋" },
  ],
  ADMIN: [
    { to: "/admin", label: "Home", icon: "🏠" },
    { to: "/admin/users", label: "Manage Users", icon: "👥" },
    { to: "/admin/complaints", label: "Manage Complaints", icon: "📊" },
    { to: "/admin/resources", label: "Manage Resources", icon: "📂" },
    { to: "/admin/security", label: "Security Console", icon: "🛡️" },
  ],
  COUNSELLOR: [
    { to: "/counsellor", label: "Home", icon: "🏠" },
    { to: "/resources", label: "Resources", icon: "📚" },
    { to: "/counsellor/appointments", label: "Appointments", icon: "📅" },
  ],
  LEGAL_ADVISOR: [
    { to: "/legal", label: "Home", icon: "🏠" },
    { to: "/admin/resources", label: "Legal Resources", icon: "⚖️" },
    { to: "/legal/appointments", label: "Appointments", icon: "📅" },
  ],
};

function Sidebar({ role }) {
  const navigate = useNavigate();
  const location = useLocation();
  const links = NAV_LINKS[role] || [];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-brand-icon">S</div>
        <h2 style={{ margin: 0, fontSize: "22px" }}>Suraksha</h2>
      </div>

      <nav className="sidebar-nav">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`sidebar-link ${location.pathname === link.to ? "active" : ""}`}
          >
            <span className="sidebar-link-icon">{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <QuickExit />
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
