import { NavLink, Outlet } from "react-router-dom";

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  marginRight: 12,
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
});

export default function MainLayout() {
  return (
    <div style={{ padding: 24 }}>
      <header style={{ marginBottom: 16 }}>
        <h1 style={{ marginBottom: 8 }}>My React Website</h1>
        <nav>
          <NavLink to="/" style={linkStyle} end>
            Home
          </NavLink>
          <NavLink to="/about" style={linkStyle}>
            About
          </NavLink>
          <NavLink to="/contact" style={linkStyle}>
            Contact
          </NavLink>
        </nav>
      </header>

      <main style={{ paddingTop: 12 }}>
        <Outlet />
      </main>

      <footer style={{ marginTop: 24, opacity: 0.7 }}>
        © {new Date().getFullYear()} My React Website
      </footer>
    </div>
  );
}
