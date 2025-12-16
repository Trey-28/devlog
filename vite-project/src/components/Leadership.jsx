import '../App.css';
import './Leadership.css';

function Leadership() {
  const experiences = [
    {
      title: "Team Week Experience",
      role: "Collaborative Team Member",
      description: "During Team Week, I learned the importance of clear communication and adaptability. Our team faced challenges in aligning our different working styles, but through daily check-ins and active listening, we built trust and delivered our project on time. I took on the role of keeping us organized and ensuring everyone's voice was heard.",
      impact: "Strengthened team cohesion and developed conflict resolution skills"
    },
    {
      title: "Gifts Project",
      role: "Self-Discovery & Purpose",
      description: "The Gifts Project helped me identify my core strengths: problem-solving, adaptability, and a genuine desire to help others grow. I realized that my technical skills are most powerful when combined with empathy and clear communication. This project shaped how I see my role in tech—not just as a developer, but as someone who builds solutions that truly serve people.",
      impact: "Clarified my purpose and strengthened my professional identity"
    },
    {
      title: "Tea Host Experience",
      role: "Professional Ambassador",
      description: "Serving as a Tea Host taught me executive presence and the art of professional conversation. I prepared by researching our guests' backgrounds, crafting thoughtful questions, and ensuring every detail reflected the professionalism of i.c.stars. These moments taught me how to represent myself and my organization with confidence and authenticity.",
      impact: "Developed executive presence and networking skills"
    },
    {
      title: "Community Role & Service Leadership",
      role: "Active Contributor",
      description: "Through my community role, I showed leadership by stepping up when tasks needed to be done, supporting my peers during challenging moments, and bringing positive energy to our cohort. I learned that leadership isn't always about being in charge—it's about being present, reliable, and willing to serve.",
      impact: "Built a reputation as a dependable and supportive team member"
    },
    {
      title: "Feedback Culture",
      role: "Growth-Minded Learner",
      description: "Participating in feedback sessions taught me how to receive constructive criticism with humility and give feedback with kindness. I learned to separate my work from my worth and to view feedback as a tool for growth rather than judgment. This mindset has transformed how I approach challenges and collaboration.",
      impact: "Developed emotional intelligence and professional maturity"
    }
  ];

  const leadershipStyle = {
    title: "My Leadership Philosophy",
    description: "I lead by being present, dependable, and focused on the team's success. I believe in creating space for others to shine, staying calm under pressure, and showing up with consistency. My approach is rooted in service—I ask how I can help, listen actively, and contribute in ways that move the team forward.",
    values: [
      "Service over ego",
      "Consistency builds trust",
      "Listen first, speak second",
      "Show up with positive energy"
    ]
  };

  const feedback = [
    {
      quote: "Travion brings calm and focus to the team. His positive attitude is contagious.",
      source: "Peer Feedback"
    },
    {
      quote: "Reliable and thoughtful—always willing to jump in and help where needed.",
      source: "Mentor Observation"
    },
    {
      quote: "Shows strong potential for technical leadership through patience and problem-solving.",
      source: "Instructor Feedback"
    }
  ];

  return (
    <div className="leadership-container">
      <header className="section-header">
        <h1 className="section-title">Leadership</h1>
        <p className="section-description">
          Throughout the 16-week i.c.stars program, I've grown as a leader through service,
          collaboration, and self-awareness. These experiences have shaped how I show up in teams
          and how I define my role in the tech industry.
        </p>
      </header>

      {/* Leadership Timeline */}
      <section className="timeline-section">
        <h2 className="section-subtitle">Leadership Journey</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">{exp.title}</h3>
                <span className="timeline-role">{exp.role}</span>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-impact">
                  <strong>Impact:</strong> {exp.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Style */}
      <section className="leadership-style-section section">
        <h2 className="section-subtitle">{leadershipStyle.title}</h2>
        <p className="section-description">{leadershipStyle.description}</p>
        <div className="values-grid">
          {leadershipStyle.values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">✓</div>
              <p className="value-text">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <section className="feedback-section">
        <h2 className="section-subtitle">Feedback & Recognition</h2>
        <div className="feedback-grid">
          {feedback.map((item, index) => (
            <div key={index} className="feedback-card">
              <p className="feedback-quote">"{item.quote}"</p>
              <p className="feedback-source">— {item.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="leadership-closing section">
        <h2 className="section-subtitle">Leadership Moving Forward</h2>
        <p className="section-description">
          As I transition from i.c.stars into my career, I'm bringing these leadership lessons with me:
          the importance of showing up consistently, the power of active listening, and the value of
          serving others. I'm committed to leading with humility, learning continuously, and using my
          technical skills to create meaningful impact in every team I join.
        </p>
      </section>
    </div>
  );
}

export default Leadership;