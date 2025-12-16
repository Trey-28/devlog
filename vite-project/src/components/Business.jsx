import '../App.css';
import './Business.css';

function Business() {
  const clientProject = {
    title: "Client Project: Real-World Business Solution",
    company: "Corporate Partner",
    problem: "Our client needed a comprehensive solution to streamline their internal processes and improve team collaboration. They faced challenges with inefficient workflows, lack of centralized communication, and difficulty tracking project progress.",
    approach: [
      "Conducted stakeholder interviews to understand pain points",
      "Analyzed current workflow and identified bottlenecks",
      "Proposed a technology-driven solution using modern tools",
      "Created detailed project timeline and deliverables",
      "Developed prototype and gathered feedback iteratively"
    ],
    myRole: "As a key contributor on the team, I focused on researching competitive solutions, building out technical requirements, and presenting our findings to the client. I also supported the development of our proposal deck and helped coordinate team meetings to ensure we stayed on track.",
    outcome: "Successfully delivered a comprehensive proposal that addressed the client's core challenges and received positive feedback on our professionalism and technical depth."
  };

  const consultingCompany = {
    name: "My Consulting Team Experience",
    description: "Working within our consulting company structure taught me how to operate like a real business. We had to manage internal roles, coordinate across different skill sets, and deliver professional-quality work under tight deadlines.",
    lessons: [
      {
        title: "Team Dynamics",
        description: "Learned to navigate different working styles, delegate effectively, and support team members through challenges."
      },
      {
        title: "Client Communication",
        description: "Developed skills in translating technical solutions into business value and presenting with confidence."
      },
      {
        title: "Project Management",
        description: "Gained experience using Agile methodology, managing timelines, and adapting when priorities shifted."
      },
      {
        title: "Professional Standards",
        description: "Understood the importance of preparation, follow-through, and maintaining quality under pressure."
      }
    ]
  };

  const companyEngagements = [
    {
      company: "Accenture",
      insight: "Learned about consulting at scale and the importance of bringing both technical expertise and business acumen to client engagements. Saw firsthand how large consulting firms structure their teams and approach complex problems."
    },
    {
      company: "Salesforce",
      insight: "Gained perspective on SaaS business models and how technology companies balance innovation with customer success. Understood the value of ecosystem thinking and platform-based solutions."
    },
    {
      company: "Capital One",
      insight: "Explored the intersection of finance and technology. Learned how tech-forward companies are reimagining traditional industries and the importance of security in customer-facing applications."
    }
  ];

  const mentorFeedback = [
    {
      situation: "Proposal Presentation",
      feedback: "Be more confident in your technical recommendations—you know more than you think.",
      action: "Started speaking up more in meetings and backing my ideas with research and data."
    },
    {
      situation: "Team Collaboration",
      feedback: "Your calm presence helps the team stay focused during stressful moments.",
      impact: "Realized my ability to stay steady under pressure is a leadership strength."
    },
    {
      situation: "Client Communication",
      feedback: "Practice simplifying technical concepts for non-technical audiences.",
      action: "Started explaining ideas to peers using analogies and real-world examples."
    }
  ];

  return (
    <div className="business-container">
      <header className="section-header">
        <h1 className="section-title">Business</h1>
        <p className="section-description">
          Through i.c.stars, I developed business thinking, consulting skills, and the ability to 
          bridge the gap between technology and business value. These experiences taught me how to 
          approach problems strategically and deliver solutions that matter.
        </p>
      </header>

      {/* Client Project Case Study */}
      <section className="case-study-section section">
        <h2 className="section-subtitle">{clientProject.title}</h2>
        <div className="case-study-company">{clientProject.company}</div>
        
        <div className="case-study-block">
          <h3 className="case-study-heading">The Problem</h3>
          <p className="section-description">{clientProject.problem}</p>
        </div>

        <div className="case-study-block">
          <h3 className="case-study-heading">Our Approach</h3>
          <ul className="approach-list">
            {clientProject.approach.map((step, index) => (
              <li key={index} className="approach-item">{step}</li>
            ))}
          </ul>
        </div>

        <div className="case-study-block">
          <h3 className="case-study-heading">My Role & Contribution</h3>
          <p className="section-description">{clientProject.myRole}</p>
        </div>

        <div className="case-study-outcome">
          <h3 className="case-study-heading">Outcome</h3>
          <p className="section-description">{clientProject.outcome}</p>
        </div>
      </section>

      {/* Consulting Company Experience */}
      <section className="consulting-section">
        <h2 className="section-subtitle">{consultingCompany.name}</h2>
        <p className="section-description">{consultingCompany.description}</p>
        
        <div className="lessons-grid">
          {consultingCompany.lessons.map((lesson, index) => (
            <div key={index} className="lesson-card">
              <h3 className="lesson-title">{lesson.title}</h3>
              <p className="lesson-description">{lesson.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Engagement Days */}
      <section className="engagements-section">
        <h2 className="section-subtitle">Insights from Company Engagements</h2>
        <div className="engagements-grid">
          {companyEngagements.map((engagement, index) => (
            <div key={index} className="engagement-card">
              <div className="engagement-header">
                <h3 className="engagement-company">{engagement.company}</h3>
              </div>
              <p className="engagement-insight">{engagement.insight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mentor Feedback & Growth */}
      <section className="mentor-section">
        <h2 className="section-subtitle">Learning from Mentors & Feedback</h2>
        <div className="feedback-timeline">
          {mentorFeedback.map((item, index) => (
            <div key={index} className="feedback-timeline-item">
              <div className="feedback-timeline-marker"></div>
              <div className="feedback-timeline-content">
                <h3 className="feedback-situation">{item.situation}</h3>
                <div className="feedback-block">
                  <span className="feedback-label">Feedback Received:</span>
                  <p className="feedback-text">"{item.feedback}"</p>
                </div>
                <div className="feedback-block">
                  <span className="feedback-label">{item.action ? "Action Taken:" : "Impact:"}</span>
                  <p className="feedback-text">{item.action || item.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Reflection */}
      <section className="business-closing section">
        <h2 className="section-subtitle">Business Value I Bring</h2>
        <p className="section-description">
          My i.c.stars business training has equipped me to think beyond code. I understand how to 
          identify business problems, work collaboratively with diverse stakeholders, communicate 
          technical solutions in business terms, and deliver value that aligns with organizational goals. 
          I'm entering the workforce not just as a developer, but as a business-minded technologist 
          ready to contribute to strategic success.
        </p>
      </section>
    </div>
  );
}

export default Business;