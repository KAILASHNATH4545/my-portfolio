import './App.css'

function App() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React']

  return (
    <div className="app">
      <nav className="navbar">
        <h2>My Portfolio</h2>
        <div>
          <a href="#about">About</a>
          {' | '}
          <a href="#skills">Skills</a>
          {' | '}
          <a herf="#projects"
            onClick={(e)=> {
              e.preventDefault();
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth',block: 'start', });       }} 
          
          >Projects</a>
          {' | '}
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        {/* h1{
          color: "black"
          } */}

        <section className='hero'>
          <img
            src="/profile.jpg.jpeg"
            alt="My Profile"
            className="profile-image"
          />
          <h1>Hello,I am Kailashnath</h1>
        </section>
        <p>welcome to my portfolio!</p>
        {/* <h1>Hi, I'm Kailashnath</h1> */}
        <h2>Aspiring Web Developer</h2>
        <p>I am learning web development and React.</p>
        <a className="button" href="#about">Know More</a>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a student learning web development.
          I am currently practising HTML,CSS,JavaScript, and React  to built responsive websites.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>My Skills</h2>
        <div className="skills">
          {skills.map((skill) => (
            <span className="skill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>
      <section id="projects" className="section">
        <h2>My Projects</h2>

        <div className="projects">
          <div className="project-card">
            <h3>Personal Portfolio</h3>
            <p>A website to showcase my skills using React and CSS.</p>
          </div>

          <div className="project-card">
            <h3>Responsive Landing Page</h3>
            <p>A simple webpage designed using HTML and CSS.</p>
          </div>

          <div className="project-card">
            <h3>JavaScript Practice</h3>
            <p>A small project to practise JavaScript fundamentals.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>Email: <a
          herf="Mail to:kkailash3341@gmail.com">kkailash3341@gmail.com
        </a>
        </p>
      </section>

      <footer>
        <p>© 2026 My Portfolio</p>
      </footer>
    </div>
  )
}

export default App