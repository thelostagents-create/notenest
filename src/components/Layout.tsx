import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { applyTheme, initTheme, type Theme } from "../lib/theme";

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5Z" />
      <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20" />
    </svg>
  );
}

function GameIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="8" width="20" height="10" rx="4" />
      <path d="M7 11v4M5 13h4" />
      <path d="M16 12h.01M18.5 14h.01" />
    </svg>
  );
}

function SunMoonIcon({ theme }: { theme: Theme }) {
  if (theme === "dark") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

const tabs = [
  { to: "/", label: "Home", end: true, Icon: HomeIcon },
  { to: "/subjects", label: "Subjects", end: false, Icon: BookIcon },
  { to: "/minigames", label: "Minigames", end: false, Icon: GameIcon },
];

export default function Layout() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(initTheme());
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "light" ? "dark" : "light";
    applyTheme(next);
    setTheme(next);
  }

  return (
    <div className="app-frame">
      <header className="site-header">
        <div className="container">
          <NavLink to="/" className="brand">
            <span className="brand-mark">📘</span>
            NoteNest
          </NavLink>
          <div className="header-actions">
            <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
              <SunMoonIcon theme={theme} />
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer className="site-footer">
        <div className="container">
          NoteNest — free guided notes &amp; practice, built for students.
        </div>
      </footer>
      <nav className="tab-bar">
        <div className="container">
          {tabs.map(({ to, label, end, Icon }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => "tab-bar-link" + (isActive ? " active" : "")}>
              <Icon />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
