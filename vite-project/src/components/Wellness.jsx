import '../App.css';
import './Wellness.css';

function Wellness() {
  const wellnessIntro = {
    title: "Wellness Wednesday: My Reset Button",
    subtitle: "How Basketball Keeps Me Grounded Through i.c.stars",
    description: "During the intense 16-week i.c.stars program, I discovered that staying balanced isn't optional—it's essential. For me, that balance comes from Wellness Wednesday, my weekly basketball routine. It's more than just exercise; it's where I clear my mind, manage stress, and reconnect with what keeps me centered."
  };

  const physicalDimension = {
    title: "Physical Wellness",
    description: "Basketball is my primary form of exercise, keeping me active during weeks filled with desk work and screen time. After 8+ hours of coding and problem-solving, getting on the court gets my body moving, my energy up, and my circulation flowing.",
    benefits: [
      "2+ hours of cardio weekly",
      "Improved stamina and endurance",
      "Better sleep quality on Wednesday nights",
      "Release of physical tension from sitting at a desk",
      "Maintains energy levels throughout the week"
    ],
    reflection: "Before basketball, I'd feel drained after long coding sessions. Now, I know that moving my body recharges my mind. The physical activity on Wednesdays carries me through the rest of the week with more energy and focus."
  };

  const mentalDimension = {
    title: "Mental Wellness",
    description: "Basketball clears the mental fog that builds up during intense technical work. When I'm stuck on a bug or overwhelmed by a project, stepping away to play basketball helps me think differently. The strategy in the game—reading plays, anticipating moves, working with teammates—trains the same part of my brain I use for coding.",
    benefits: [
      "Mental clarity and improved focus",
      "Creative problem-solving through strategic thinking",
      "Break from screen time and mental reset",
      "Better concentration in the days following",
      "Reduced mental fatigue"
    ],
    reflection: "I've noticed that some of my best coding breakthroughs happen after basketball. Stepping away from the problem and engaging a different part of my brain helps me see solutions I couldn't see when I was staring at the screen."
  };

  const emotionalDimension = {
    title: "Emotional Wellness",
    description: "Basketball is where I process the pressure of i.c.stars. On the court, I can let go of perfectionism, release stress, and just play. It's a space where I don't have to be perfect—I can make mistakes, laugh them off, and keep going. This practice of self-compassion on the court has helped me be kinder to myself in my coding work too.",
    benefits: [
      "Healthy outlet for stress and frustration",
      "Consistent source of joy and happiness",
      "Community and connection with others",
      "Emotional regulation and resilience",
      "Practice in letting go of perfectionism"
    ],
    reflection: "i.c.stars is demanding, and it's easy to feel overwhelmed. Basketball gives me a space to release that pressure without judgment. I leave the court feeling lighter, happier, and more grounded—ready to tackle whatever comes next."
  };

  const financialDimension = {
    title: "Financial Wellness",
    description: "One of the best things about basketball is that it's a free, sustainable wellness practice. I don't need a gym membership, expensive equipment, or subscription services. All I need is access to a court and a ball. This has taught me that effective stress management and wellness don't have to be expensive.",
    benefits: [
      "Free or low-cost activity",
      "Prevents burnout (protecting long-term career health)",
      "Teaches discipline and consistency",
      "Sustainable wellness practice I can maintain long-term",
      "No financial barriers to maintaining my health"
    ],
    reflection: "Basketball has shown me that the most valuable wellness practices aren't always the ones that cost money. The consistency and discipline I've built through basketball—showing up even when it's hard—is the same mindset I need to build a successful career in tech and manage my finances responsibly."
  };

  const weeklyRoutine = {
    title: "My Wellness Wednesday Routine",
    before: [
      "Often feeling mentally drained from coding challenges",
      "Physical tension from hours of sitting",
      "Stress building up from project deadlines",
      "Mind racing with technical problems"
    ],
    during: [
      "2 hours of focused physical activity",
      "Strategic thinking and quick decision-making",
      "Social connection and teamwork",
      "Complete mental break from tech work"
    ],
    after: [
      "Mind clear and ready to tackle problems",
      "Body energized and tension released",
      "Improved mood and emotional balance",
      "Better sleep and recovery",
      "Renewed focus for the rest of the week"
    ]
  };

  const longTermCommitment = {
    title: "Beyond i.c.stars: A Lifelong Practice",
    description: "Basketball isn't just getting me through i.c.stars—it's a wellness habit I'm committed to for life. As I transition into my tech career, I know the demands won't stop. The stress of deadlines, the pressure to perform, and the challenge of continuous learning will all be there. That's why I'm committed to continuing this practice.",
    commitment: [
      "Schedule weekly basketball sessions just like any other important meeting",
      "Find basketball communities wherever I live or work",
      "Use it as a tool to prevent burnout in my career",
      "Model healthy work-life balance for future teams",
      "Continue building discipline, resilience, and self-care habits"
    ],
    closing: "Wellness Wednesday has taught me that taking care of myself isn't selfish—it's essential. The better I care for my physical, mental, emotional, and financial health, the better I can show up for my work, my team, and my future. Basketball is my anchor, and it will continue to be as I grow in my career."
  };

  return (
    <div className="wellness-container">
      <header className="wellness-intro section">
        <h1 className="section-title">{wellnessIntro.title}</h1>
        <p className="wellness-subtitle">{wellnessIntro.subtitle}</p>
        <p className="section-description">{wellnessIntro.description}</p>
      </header>

      {/* Four Dimensions Grid */}
      <section className="dimensions-section">
        <h2 className="section-subtitle">Four Dimensions of Wellness</h2>
        
        {/* Physical Wellness */}
        <div className="dimension-card">
          <div className="dimension-header physical">
            <div className="dimension-icon">💪</div>
            <h3 className="dimension-title">{physicalDimension.title}</h3>
          </div>
          <div className="dimension-content">
            <p className="dimension-description">{physicalDimension.description}</p>
            <div className="benefits-section">
              <h4 className="benefits-title">Benefits</h4>
              <ul className="benefits-list">
                {physicalDimension.benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">{benefit}</li>
                ))}
              </ul>
            </div>
            <div className="reflection-section">
              <h4 className="reflection-title">Reflection</h4>
              <p className="reflection-text">{physicalDimension.reflection}</p>
            </div>
          </div>
        </div>

        {/* Mental Wellness */}
        <div className="dimension-card">
          <div className="dimension-header mental">
            <div className="dimension-icon">🧠</div>
            <h3 className="dimension-title">{mentalDimension.title}</h3>
          </div>
          <div className="dimension-content">
            <p className="dimension-description">{mentalDimension.description}</p>
            <div className="benefits-section">
              <h4 className="benefits-title">Benefits</h4>
              <ul className="benefits-list">
                {mentalDimension.benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">{benefit}</li>
                ))}
              </ul>
            </div>
            <div className="reflection-section">
              <h4 className="reflection-title">Reflection</h4>
              <p className="reflection-text">{mentalDimension.reflection}</p>
            </div>
          </div>
        </div>

        {/* Emotional Wellness */}
        <div className="dimension-card">
          <div className="dimension-header emotional">
            <div className="dimension-icon">❤️</div>
            <h3 className="dimension-title">{emotionalDimension.title}</h3>
          </div>
          <div className="dimension-content">
            <p className="dimension-description">{emotionalDimension.description}</p>
            <div className="benefits-section">
              <h4 className="benefits-title">Benefits</h4>
              <ul className="benefits-list">
                {emotionalDimension.benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">{benefit}</li>
                ))}
              </ul>
            </div>
            <div className="reflection-section">
              <h4 className="reflection-title">Reflection</h4>
              <p className="reflection-text">{emotionalDimension.reflection}</p>
            </div>
          </div>
        </div>

        {/* Financial Wellness */}
        <div className="dimension-card">
          <div className="dimension-header financial">
            <div className="dimension-icon">💰</div>
            <h3 className="dimension-title">{financialDimension.title}</h3>
          </div>
          <div className="dimension-content">
            <p className="dimension-description">{financialDimension.description}</p>
            <div className="benefits-section">
              <h4 className="benefits-title">Benefits</h4>
              <ul className="benefits-list">
                {financialDimension.benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">{benefit}</li>
                ))}
              </ul>
            </div>
            <div className="reflection-section">
              <h4 className="reflection-title">Reflection</h4>
              <p className="reflection-text">{financialDimension.reflection}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Routine */}
      <section className="routine-section section">
        <h2 className="section-subtitle">{weeklyRoutine.title}</h2>
        <div className="routine-grid">
          <div className="routine-phase">
            <h3 className="routine-phase-title">Before Basketball</h3>
            <ul className="routine-list">
              {weeklyRoutine.before.map((item, index) => (
                <li key={index} className="routine-item">{item}</li>
              ))}
            </ul>
          </div>
          <div className="routine-phase">
            <h3 className="routine-phase-title">During Basketball</h3>
            <ul className="routine-list">
              {weeklyRoutine.during.map((item, index) => (
                <li key={index} className="routine-item">{item}</li>
              ))}
            </ul>
          </div>
          <div className="routine-phase">
            <h3 className="routine-phase-title">After Basketball</h3>
            <ul className="routine-list">
              {weeklyRoutine.after.map((item, index) => (
                <li key={index} className="routine-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Long-term Commitment */}
      <section className="commitment-section">
        <h2 className="section-subtitle">{longTermCommitment.title}</h2>
        <p className="section-description">{longTermCommitment.description}</p>
        <div className="commitment-list-section">
          <h3 className="commitment-list-title">My Commitment</h3>
          <ul className="commitment-list">
            {longTermCommitment.commitment.map((item, index) => (
              <li key={index} className="commitment-item">{item}</li>
            ))}
          </ul>
        </div>
        <div className="wellness-closing-statement section">
          <p className="closing-statement-text">{longTermCommitment.closing}</p>
        </div>
      </section>
    </div>
  );
}

export default Wellness;