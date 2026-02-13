function Projects() {
    const projects = [
        {
            title: "Task Manager API",
            description: "A RESTful API for managing tasks with user authentication and role-based access.",
            tech: "Java Spring Boot, MySQL, JWT, Postman",
            link: "https://github.com/yourusername/task-manager-api"
        },
        {
            title: "E-commerce Web App",
            description: "A full-stack application for online shopping, including product listing, cart, and checkout.",
            tech: "React, Java Spring Boot, PostgreSQL, Stripe API",
            link: "https://github.com/yourusername/ecommerce-app"
        },
        {
            title: "Attendance Tracker",
            description: "A web-based system to manage employee attendance with reporting and analytics.",
            tech: "Java Spring Boot, React, MongoDB, REST API",
            link: "https://github.com/yourusername/attendance-app"
        },
        {
            title: "Attendance Tracker",
            description: "A web-based system to manage employee attendance with reporting and analytics.",
            tech: "Java Spring Boot, React, MongoDB, REST API",
            link: "https://github.com/yourusername/attendance-app"
        },
        {
            title: "Attendance Tracker",
            description: "A web-based system to manage employee attendance with reporting and analytics.",
            tech: "Java Spring Boot, React, MongoDB, REST API",
            link: "https://github.com/yourusername/attendance-app"
        },
        {
            title: "Attendance Tracker",
            description: "A web-based system to manage employee attendance with reporting and analytics.",
            tech: "Java Spring Boot, React, MongoDB, REST API",
            link: "https://github.com/yourusername/attendance-app"
        }
    ];

    return (
        <section className="projects-section">
            <div className="projects-container">
                <h1 className="projects-title font-heading">Projects</h1>
                <p className="projects-description font-body">
                    A selection of web applications and backend systems I have developed using modern technologies:
                </p>
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card font-body"
                            style={{ animation: `slideInUp 0.8s ease-out ${0.1 + index * 0.05}s both` }}
                        >
                            <h2 className="project-title font-heading">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                            <p className="project-tech">{project.tech}</p>
                            {project.link && (
                                <a
                                    href={project.link}
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
