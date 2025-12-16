import '../App.css';
import './CareerDevelopment.css';

function CareerDevelopment() {
  const careerVision = {
    shortTerm: "Secure an entry-level position as a Cybersecurity Analyst or Junior Full-Stack Developer where I can apply my technical skills, continue learning, and contribute to meaningful projects.",
    longTerm: "Become a Cybersecurity Engineer specializing in application security and secure software development. I want to build expertise in threat detection, vulnerability assessment, and creating security solutions that protect users and organizations."
  };

  const workshops = [
    {
      company: "Accenture",
      topic: "Consulting & Technology Careers",
      insight: "Learned about the consulting industry and how technology professionals work with clients to solve complex business problems. Realized the importance of communication skills alongside technical expertise.",
      impact: "Helped me see how my technical skills can translate into business value and client impact."
    },
    {
      company: "Salesforce",
      topic: "Career Paths in Tech",
      insight: "Explored different roles within tech companies—from software engineering to product management. Saw how companies invest in employee growth and development.",
      impact: "Clarified that I want to work for a company that prioritizes continuous learning and innovation."
    },
    {
      company: "Capital One",
      topic: "Tech in Financial Services",
      insight: "Discovered how cybersecurity is critical in protecting customer data and financial systems. Saw the intersection of technology, security, and business operations.",
      impact: "Confirmed my interest in cybersecurity and showed me the real-world applications of security work."
    }
  ];

  const confidenceGrowth = [
    {
      phase: "Week 1-4: Foundation",
      feeling: "Overwhelmed and uncertain about my technical abilities.",
      growth: "Started building confidence through daily practice and small wins."
    },
    {
      phase: "Week 5-8: Application",
      feeling: "Beginning to see progress but still doubted my readiness for the industry.",
      growth: "Feedback from mentors helped me recognize my strengths and areas for improvement."
    },
    {
      phase: "Week 9-12: Integration",
      feeling: "More confident in my technical skills and ability to learn new concepts.",
      growth: "Started viewing challenges as opportunities rather than obstacles."
    },
    {
      phase: "Week 13-16: Transformation",
      feeling: "Ready to enter the workforce with a clear vision of my career path.",
      growth: "Developed professional identity and confidence to advocate for myself in job interviews."
    }
  ];

  const skillsDeveloped = [
    {
      category: "Technical Skills",
      skills: ["Full-stack development", "Cybersecurity fundamentals", "Database management", "Version control (Git)", "Problem-solving under pressure"]
    },
    {
      category: "Professional Skills",
      skills: ["Client communication", "Team collaboration", "Time management", "Presentation skills", "Receiving and applying feedback"]
    },
    {
      category: "Business Skills",
      skills: ["Understanding business value", "Project management", "Stakeholder engagement", "Strategic thinking", "Professional writing"]
    }
  ];

  const targetRoles = [
    {
      title: "Cybersecurity Analyst",
      why: "Combines my interest in security with my technical skills. I'm excited about protecting systems, identifying vulnerabilities, and responding to threats.",
      alignment: "Aligns with my attention to detail, problem-solving mindset, and desire to make a meaningful impact."
    },
    {
      title: "Junior Full-Stack Developer",
      why: "Allows me to build complete applications while continuing to learn. I enjoy both frontend design and backend logic.",
      alignment: "Matches my coding skills and my interest in creating user-facing solutions that solve real problems."
    },
    {
      title: "Security Software Developer",
      why: "The perfect intersection of development and security. Building secure applications from the ground up.",
      alignment: "Leverages both my development skills and security knowledge to create solutions that are functional and safe."
    }
  ];

  return (
    <div className="career-container">
      <header className="section-header">
        <h1 className="section-title">Career Development</h1>
        <p className="section-description">
          Through workshops, mentorship, and self-reflection, I've developed a clear vision for my 
          career in technology. I know what roles excite me, what skills I bring to the table, and 
          the type of environment where I can thrive and grow.
        </p>
      </header>

      {/* Career Vision */}
      <section className="vision-section section">
        <h2 className="section-subtitle">My Career Vision</h2>
        <div className="vision-grid">
          <div className="vision-card">
            <div className="vision-label">Short-Term Goal (1-2 years)</div>
            <p className="vision-text">{careerVision.shortTerm}</p>
          </div>
          <div className="vision-card">
            <div className="vision-label">Long-Term Goal (3-5 years)</div>
            <p className="vision-text">{careerVision.longTerm}</p>
          </div>
        </div>
      </section>

      {/* Workshops & Insights */}
      <section className="workshops-section">
        <h2 className="section-subtitle">Learning from Industry Partners</h2>
        <div className="workshops-grid">
          {workshops.map((workshop, index) => (
            <div key={index} className="workshop-card">
              <div className="workshop-header">
                <h3 className="workshop-company">{workshop.company}</h3>
                <span className="workshop-topic">{workshop.topic}</span>
              </div>
              <div className="workshop-content">
                <div className="workshop-block">
                  <h4 className="workshop-label">Key Insight</h4>
                  <p className="workshop-text">{workshop.insight}</p>
                </div>
                <div className="workshop-block">
                  <h4 className="workshop-label">Impact on My Thinking</h4>
                  <p className="workshop-text">{workshop.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Confidence Growth */}
      <section className="confidence-section">
        <h2 className="section-subtitle">Confidence Growth Journey</h2>
        <div className="confidence-timeline">
          {confidenceGrowth.map((phase, index) => (
            <div key={index} className="confidence-item">
              <div className="confidence-marker"></div>
              <div className="confidence-content">
                <h3 className="confidence-phase">{phase.phase}</h3>
                <div className="confidence-feeling">
                  <strong>How I Felt:</strong> {phase.feeling}
                </div>
                <div className="confidence-growth">
                  <strong>Growth:</strong> {phase.growth}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Developed */}
      <section className="skills-developed-section section">
        <h2 className="section-subtitle">Skills I've Built</h2>
        <div className="skills-grid">
          {skillsDeveloped.map((category, index) => (
            <div key={index} className="skills-category-card">
              <h3 className="skills-category-title">{category.category}</h3>
              <ul className="skills-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Target Roles */}
      <section className="roles-section">
        <h2 className="section-subtitle">Roles I'm Pursuing</h2>
        <div className="roles-grid">
          {targetRoles.map((role, index) => (
            <div key={index} className="role-card">
              <h3 className="role-title">{role.title}</h3>
              <div className="role-block">
                <h4 className="role-label">Why This Role</h4>
                <p className="role-text">{role.why}</p>
              </div>
              <div className="role-block">
                <h4 className="role-label">How It Aligns</h4>
                <p className="role-text">{role.alignment}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Brand */}
      <section className="brand-section section">
        <h2 className="section-subtitle">My Professional Brand</h2>
        <p className="section-description">
          I am a detail-oriented, security-minded developer who brings calm, consistency, and 
          problem-solving to every team I join. I value continuous learning, clear communication, 
          and building solutions that make a real impact. I'm entering the tech industry not just 
          as a coder, but as a professional who understands business value, user needs, and the 
          importance of secure, quality work.
        </p>
      </section>

      {/* Closing */}
      <section className="career-closing section">
        <h2 className="section-subtitle">Ready for What's Next</h2>
        <p className="section-description">
          i.c.stars has prepared me not just with technical skills, but with the confidence, 
          professionalism, and strategic thinking needed to succeed in the tech industry. I know 
          what I want, I know what I bring, and I'm ready to contribute to a team that values growth, 
          innovation, and making a difference.
        </p>
      </section>
    </div>
  );
}

export default CareerDevelopment;