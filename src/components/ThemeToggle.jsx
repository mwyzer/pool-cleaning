import React from "react";
import { useTheme } from "../contexts/ThemeContext";

function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className="theme-toggle-track">
        <div className="theme-toggle-thumb">
          <div className="theme-icon theme-icon-sun">☀️</div>
          <div className="theme-icon theme-icon-moon">🌙</div>
        </div>
      </div>
    </button>
  );
}

export default ThemeToggle;
