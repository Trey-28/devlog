import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import "./App.css";
import { useTheme } from "./context/ThemeContext";

// Import all components
import Leadership from "./components/Leadership";
import Business from "./components/Business";
import Technology from "./components/Technology";
import CareerDevelopment from "./components/CareerDevelopment";
import Wellness from "./components/Wellness";
import Resume from "./components/Resume";

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Header */}
      <header className="portfolio-header">
        <div className="header-content">
          <h1 className="portfolio-title">Travion Ashford</h1>
          <div className="header-controls">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={`hamburger ${menuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <button onClick={() => handleNavClick('home')} className={activeSection === 'home' ? 'active' : ''}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('leadership')} className={activeSection === 'leadership' ? 'active' : ''}>
              Leadership
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('business')} className={activeSection === 'business' ? 'active' : ''}>
              Business
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('technology')} className={activeSection === 'technology' ? 'active' : ''}>
              Technology
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('career')} className={activeSection === 'career' ? 'active' : ''}>
              Career Development
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('wellness')} className={activeSection === 'wellness' ? 'active' : ''}>
              Wellness
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('resume')} className={activeSection === 'resume' ? 'active' : ''}>
              Resume
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-container">
        {activeSection === 'home' && (
          <div className="home-section">
            <div className="hero-content">
              <h2 className="hero-title">Cybersecurity Professional | Full-Stack Developer</h2>
              <p className="hero-subtitle">i.c.stars Cycle 58 | Chicago, IL</p>
              <p className="hero-description">
                Results-driven technology professional with expertise in cybersecurity and full-stack development.
                Passionate about building secure, scalable solutions and continuous learning.
              </p>
              <div className="contact-info">
                <a href="mailto:Travion.d.ashford@gmail.com" className="contact-link">
                  Travion.d.ashford@gmail.com
                </a>
                <span className="divider">|</span>
                <a href="tel:224-348-1843" className="contact-link">
                  224-348-1843
                </a>
                <span className="divider">|</span>
                <a href="https://www.linkedin.com/in/travion-ashford-689632385/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'leadership' && <Leadership />}
        {activeSection === 'business' && <Business />}
        {activeSection === 'technology' && <Technology />}
        {activeSection === 'career' && <CareerDevelopment />}
        {activeSection === 'wellness' && <Wellness />}
        {activeSection === 'resume' && <Resume />}
      </main>
    </div>
  );
}

export default App;