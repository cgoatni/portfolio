function Skills() {
  const skills = [
    "Java & Spring Boot",
    "RESTful APIs & Microservices",
    "MySQL & PostgreSQL",
    "React, HTML, CSS",
    "Git & Version Control",
    "Unit Testing & Clean Code Practices",
    "Docker & Containerization",
    "Agile & Scrum Methodologies",
    "Git & Version Control",
    "Unit Testing & Clean Code Practices",
    "Docker & Containerization",
    "Agile & Scrum Methodologies"
  ];


  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h1 className="skills-title font-heading">Technical Skills</h1>
        <p className="skills-description font-body">
          I utilize a variety of technologies and tools to develop robust, scalable, and maintainable web applications:
        </p>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item font-body"
              style={{
                animation: `slideInUp 0.8s ease-out ${0.3 + index * 0.05}s both`
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
