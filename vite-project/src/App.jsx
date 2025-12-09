import { useState } from "react";
import "./App.css";
import logo from "./assets/download (2).jpg";
import LogCard from "./components/LogCard";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="hero">Travion | Cycle 58</div>

      <nav className="navbar">
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/travion-ashford-689632385/">linkedin</a>
          </li>
        </ul>
      </nav>

      <div className="container">
        <aside className="sidebar">
          <img src={logo} alt="Kyrie celebration" className="profile-img" />
          <section>
            <h2>About Me</h2>
            <p>
              My name is Travion Ashford, a 23-year-old born and raised in
              Chicago with a growing passion for technology and continuous
              learning. As an intern at i.c.stars, I'm focused on expanding my
              skills and developing a strong foundation to become a full-stack
              developer. I'm driven by curiosity and the desire to build
              creative, meaningful solutions through code. Outside of tech, I
              enjoy playing video games, watching and playing basketball, and
              spending quality time with my family and girlfriend.
            </p>
          </section>
        </aside>

        <main className="main-content">
          <h2 id="main-title">My DevLogs</h2>
          <div id="dev-log">
            <LogCard />
          </div>

          {/* What I Learned Section */}
          <section className="learning-section">
            <h2>What I Learned</h2>

            {/* September */}
            <div className="month-section">
              <h3>September</h3>

              <div className="learning-card">
                <h4>📅 Wed 17 – UI/UX & User Stories</h4>
                <p>
                  Learned the importance of user-centered design and how user
                  stories define project goals. This helped me think like a
                  designer and create experiences that make sense for real
                  people.
                </p>
              </div>

              <div className="learning-card">
                <h4>📅 Wed 18 – Intro to Power BI</h4>
                <p>
                  Discovered how to visualize and analyze data using Power BI.
                  It was my first look at turning raw numbers into insights.
                </p>
              </div>

              <div className="learning-card">
                <h4>📅 Mon 22 – Data Modeling</h4>
                <p>
                  Learned how to structure and link tables to create strong
                  relationships for cleaner analytics and faster insights.
                </p>
              </div>
            </div>

            {/* October */}
            <div className="month-section">
              <h3>October</h3>

              <div className="learning-card">
                <h4>📅 Mon 20 – Functions, Errors & Debugging</h4>
                <p>
                  Improved my coding habits by learning to find and fix bugs
                  efficiently, and understanding how functions make code more
                  modular.
                </p>
              </div>

              <div className="learning-card">
                <h4>📅 Fri 31 – Building React UI for Feedback</h4>
                <p>
                  Designed and coded a feedback form using React components.
                  It helped me understand how UI elements work together.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;