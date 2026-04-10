function App() {
  return (
    <>
      <section id="hero">
        <div className="hero-content">
          <h1>blake7</h1>
          <p className="tagline">Full-stack developer & open source enthusiast</p>
          <div className="social-links">
            <a href="https://github.com/blazebsc" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:me@blake7.eu.org">Email</a>
          </div>
        </div>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>I'm a software developer passionate about building great products and contributing to open source. I specialize in web development.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project One</h3>
            <p>A brief description of this awesome project.</p>
            <a href="#" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>Another cool project I worked on.</p>
            <a href="#" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>
          <div className="project-card">
            <h3>Project Three</h3>
            <p>Something interesting here.</p>
            <a href="#" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>
        </div>
      </section>

      <section id="photo">
        <img src="/po.jpeg" alt="po" className="big-photo" />
      </section>
    </>
  )
}

export default App
