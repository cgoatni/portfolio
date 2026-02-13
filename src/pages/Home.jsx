function Home() {
    return (
        <section className="home-section">
            <div className="home-content">
                <h1 className="home-greeting font-heading" id="name-text">
                    Hi, I'm John 👋
                </h1>
                <h2 className="home-title font-body" id="title-text">
                    Backend Developer
                </h2>
                <p className="home-description font-body" id="description-text">
                    I build reliable backend systems with <strong>Java Spring Boot</strong> and REST APIs.
                    I also know the basics of <strong>React</strong> and <strong>HTML/CSS</strong>, which helps me
                    connect backend services with the front-end smoothly.
                    My focus is on clean code, efficient databases, and applications that are easy to maintain.
                </p>
            </div>
        </section>
    );
}

export default Home;
