import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

const skills = ['HTML', 'CSS', 'JavaScript', 'React']

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">My Portfolio</Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

function Home() {
  return (
    <main className="hero">
      <div className="photo-container">
        <img
          src="/profile-photo.png"
          alt="Kailashnath's profile"
          className="profile-image"
        />
      </div>
      <div className="hero-content">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>
        <h1>Hello, I'm <span>Kailashnath!</span></h1>
        <h2>Aspiring Web Developer</h2>
        <p>
          I'm learning web development and React.
          I enjoy building simple and responsive websites.
        </p>
        <Link to="/about" className="button">Know More</Link>
      </div>

      
    </main>
  )
}

function About() {
  return (
    <section className="page-section">
      <p className="welcome">GET TO KNOW ME</p>
      <h1>About <span>Me</span></h1>
      <p>
        I am a student learning web development.
        I am currently practising HTML, CSS, JavaScript,
        and React to build responsive websites.
      </p>
    </section>
  )
}

function Skills() {
  return (
    <section className="page-section">
      <p className="welcome">WHAT I AM LEARNING</p>
      <h1>My <span>Skills</span></h1>
      <div className="skills">
        {skills.map((skill) => (
          <div className="skill" key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="page-section">
      <p className="welcome">WHAT I HAVE BUILT</p>
      <h1>My <span>Projects</span></h1>

      <div className="projects">
        <div className="project-card">
          <h2>Personal Portfolio</h2>
          <p>A website to showcase my skills using React and CSS.</p>
        </div>

        <div className="project-card">
          <h2>Responsive Landing Page</h2>
          <p>A simple webpage designed using HTML and CSS.</p>
        </div>

        <div className="project-card">
          <h2>JavaScript Practice</h2>
          <p>A project to practise JavaScript fundamentals.</p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="page-section">
      <p className="welcome">LET'S CONNECT</p>
      <h1>Contact <span>Me</span></h1>
      <p>Email: <a href="mailto:kkailash3341@gmail.com">
        kkailash3341@gmail.com
      </a></p>
      <a
        href="mailto:kkailash3341@gmail.com"
        className="mail-button"
      >
        Mail to me →
      </a>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer>
          <p>© 2026 My Portfolio</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App