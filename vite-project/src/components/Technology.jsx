import '../App.css';
import './Technology.css';
import PasswordAuditor from './PasswordAuditor';

function Technology() {
  const techStack = {
    title: "My Technical Stack",
    description: "Throughout i.c.stars, I've built a strong foundation in modern web development and cybersecurity principles.",
    skills: [
      {
        category: "Frontend",
        items: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"]
      },
      {
        category: "Backend & Data",
        items: ["SQL", "Database Design", "API Integration", "Data Analysis"]
      },
      {
        category: "Security",
        items: ["Cybersecurity Fundamentals", "Vulnerability Assessment", "Secure Coding", "Risk Analysis"]
      },
      {
        category: "Tools & Workflow",
        items: ["Git/GitHub", "VS Code", "Trello", "Agile Methodology", "Office 365"]
      }
    ]
  };

  const geekWeek = {
    title: "Geek Week: Technical Bootcamp",
    description: "An intensive week focused on rapid skill development and technical challenges.",
    experiences: [
      {
        challenge: "SQL Testing",
        growth: "Improved query optimization and database design understanding. Learned to write complex joins and subqueries efficiently."
      },
      {
        challenge: "Excel Mastery",
        growth: "Advanced from basic formulas to complex data analysis using pivot tables, VLOOKUP, and conditional formatting."
      },
      {
        challenge: "Hot Keys & Efficiency",
        growth: "Drastically improved workflow speed by mastering keyboard shortcuts across development tools."
      },
      {
        challenge: "Timed Assessments",
        growth: "Developed ability to perform under pressure and manage time effectively during technical challenges."
      }
    ],
    typingProgress: {
      before: "32 WPM",
      after: "45+ WPM",
      improvement: "40% increase"
    }
  };

  const codingJourney = [
    {
      moment: "First 'Aha!' Moment",
      description: "The moment React components clicked for me. I realized that breaking down a complex UI into reusable pieces made everything more manageable. It changed how I think about building applications."
    },
    {
      moment: "Debugging Breakthrough",
      description: "Spent hours tracking down a bug in my code, only to realize it was a missing bracket. That frustration taught me the value of console.log, reading error messages carefully, and taking breaks when stuck."
    },
    {
      moment: "GitHub Collaboration",
      description: "My first merge conflict was intimidating, but working through it with my team taught me how version control enables real collaboration. Now I understand why GitHub is essential for professional development."
    },
    {
      moment: "Asking Better Questions",
      description: "Learned to move from 'my code doesn't work' to 'I expected X but got Y because of Z.' This shift made me a better problem-solver and helped me get better support from mentors."
    }
  ];

  const projects = [
    {
      name: "Password Strength Auditor",
      description: "A cybersecurity tool that analyzes password strength in real-time, calculating entropy, detecting patterns, and estimating crack times.",
      myContribution: "Built the entire frontend using React with real-time analysis, implemented security algorithms (entropy calculation, pattern detection), and designed a clean, professional UI.",
      techUsed: ["React", "JavaScript", "CSS3", "Security Algorithms"],
      businessValue: "Helps users understand password security and make informed decisions about their digital safety."
    }
  ];

  return (
    <div className="technology-container">
      <header className="section-header">
        <h1 className="section-title">Technology</h1>
        <p className="section-description">
          My technical journey through i.c.stars has been transformational. From learning to code 
          to building secure, functional applications, I've developed both the hard skills and 
          problem-solving mindset needed for a career in technology.
        </p>
      </header>

      {/* Tech Stack */}
      <section className="tech-stack-section section">
        <h2 className="section-subtitle">{techStack.title}</h2>
        <p className="section-description">{techStack.description}</p>
        <div className="tech-grid">
          {techStack.skills.map((skillGroup, index) => (
            <div key={index} className="tech-category-card">
              <h3 className="tech-category-title">{skillGroup.category}</h3>
              <ul className="tech-list">
                {skillGroup.items.map((item, idx) => (
                  <li key={idx} className="tech-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Geek Week */}
      <section className="geek-week-section">
        <h2 className="section-subtitle">{geekWeek.title}</h2>
        <p className="section-description">{geekWeek.description}</p>
        
        <div className="geek-week-grid">
          {geekWeek.experiences.map((exp, index) => (
            <div key={index} className="geek-week-card">
              <h3 className="geek-week-challenge">{exp.challenge}</h3>
              <p className="geek-week-growth">{exp.growth}</p>
            </div>
          ))}
        </div>

        <div className="typing-progress section">
          <h3 className="typing-title">Typing Speed Growth</h3>
          <div className="typing-stats">
            <div className="typing-stat">
              <span className="typing-label">Before</span>
              <span className="typing-value">{geekWeek.typingProgress.before}</span>
            </div>
            <div className="typing-arrow">→</div>
            <div className="typing-stat">
              <span className="typing-label">After</span>
              <span className="typing-value">{geekWeek.typingProgress.after}</span>
            </div>
            <div className="typing-improvement">
              {geekWeek.typingProgress.improvement}
            </div>
          </div>
        </div>
      </section>

      {/* Coding Journey */}
      <section className="coding-journey-section">
        <h2 className="section-subtitle">Moments That Shaped My Learning</h2>
        <div className="journey-timeline">
          {codingJourney.map((moment, index) => (
            <div key={index} className="journey-item">
              <div className="journey-marker"></div>
              <div className="journey-content">
                <h3 className="journey-title">{moment.moment}</h3>
                <p className="journey-description">{moment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="projects-section">
        <h2 className="section-subtitle">Featured Project</h2>
        {projects.map((project, index) => (
          <div key={index} className="project-showcase section">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-details">
              <div className="project-detail-block">
                <h4 className="project-detail-title">My Contribution</h4>
                <p className="project-detail-text">{project.myContribution}</p>
              </div>
              
              <div className="project-detail-block">
                <h4 className="project-detail-title">Technologies Used</h4>
                <div className="tech-tags">
                  {project.techUsed.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-detail-block">
                <h4 className="project-detail-title">Business Value</h4>
                <p className="project-detail-text">{project.businessValue}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Live Demo */}
      <section className="demo-section">
        <h2 className="section-subtitle">Live Demo: Password Strength Auditor</h2>
        <p className="section-description">
          Try out my cybersecurity tool below. This application demonstrates real-time analysis, 
          security algorithms, and professional UI design.
        </p>
        <div className="demo-container">
          <PasswordAuditor />
        </div>
      </section>

      {/* GitHub & Portfolio */}
      <section className="github-section section">
        <h2 className="section-subtitle">View My Code</h2>
        <p className="section-description">
          All my projects are version-controlled and documented on GitHub. I follow best practices 
          for commits, branching, and code organization.
        </p>
        <a 
          href="https://github.com/Trey-28" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link btn btn-primary"
        >
          Visit My GitHub
        </a>
      </section>

      {/* Closing */}
      <section className="technology-closing section">
        <h2 className="section-subtitle">Technical Growth & Future</h2>
        <p className="section-description">
          The technical skills I've built at i.c.stars are just the beginning. I'm committed to 
          continuous learning, staying current with industry trends, and deepening my expertise in 
          cybersecurity and full-stack development. I'm ready to bring these skills to a team that 
          values growth, innovation, and quality.
        </p>
      </section>
    </div>
  );
}

export default Technology;