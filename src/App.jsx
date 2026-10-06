import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://future-fs-01-1jt.onrender.com/api/contact",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch {
      setStatus("Backend is not running yet.");
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          JAMUNA<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀" : "☾"}
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="small-title">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Jamuna J</span>
          </h1>

          <h2>Computer Science Engineering Student</h2>

          <p className="hero-description">
            Passionate about technology, problem solving and building
            practical solutions that create real-world impact.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="secondary-btn"
            >
              Download Resume
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/jamuna-j-aa9176345/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:jjamunajayanna2006@gmail.com">
              Email
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-circle">
            <span>JJ</span>
          </div>

          <p>Computer Science</p>
          <p>Engineering Student</p>

          <div className="availability">
            ● Open to Learning & Opportunities
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div>
            <h3>Learning. Building. Growing.</h3>

            <p>
              I am a Computer Science and Engineering student at
              Jawaharlal Nehru New College of Engineering, currently
              pursuing my third year.
            </p>

            <p>
              I am enthusiastic about exploring technology, developing
              practical solutions and continuously improving my technical
              and problem-solving skills.
            </p>

            <p>
              I enjoy participating in hackathons, technical competitions,
              IEEE activities and collaborative projects that provide
              opportunities to learn beyond the classroom.
            </p>

            <p>
              My project experience includes AI-assisted applications,
              smart agriculture solutions and educational technology.
              I believe in learning by building, experimenting and
              continuously improving.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <h3>9.1</h3>
              <p>CGPA</p>
            </div>

            <div className="stat-card">
              <h3>5th</h3>
              <p>Semester</p>
            </div>

            <div className="stat-card">
              <h3>4</h3>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h3>IEEE</h3>
              <p>Activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-heading">
          <p>WHAT I WORK WITH</p>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <span>01</span>
            <h3>Programming</h3>
            <p>C</p>
            <p>Python</p>
          </div>

          <div className="skill-card">
            <span>02</span>
            <h3>Web Technologies</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>

          <div className="skill-card">
            <span>03</span>
            <h3>Computer Science</h3>
            <p>Data Structures & Algorithms</p>
            <p>DBMS</p>
          </div>

          <div className="skill-card">
            <span>04</span>
            <h3>Tools & AI</h3>
            <p>Git</p>
            <p>GitHub</p>
            <p>VS Code</p>
            <p>Google Gemini</p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-heading">
          <p>MY WORK</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-number">01</div>
            <h3>AI Plant Doctor</h3>

            <p>
              AI-assisted smart agriculture application designed to
              analyze plant health using inputs such as moisture,
              nutrient level, salt content and plant type.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>Flask</span>
              <span>AI</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">02</div>
            <h3>Smart Agriculture & Rural Resilience</h3>

            <p>
              Technology-focused solution exploring AI-driven monitoring,
              early risk awareness and data-supported decision making
              for agriculture and rural communities.
            </p>

            <div className="tags">
              <span>Gemini</span>
              <span>AI</span>
              <span>HTML</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>
            <h3>Adaptive Learning for Neurodivergence</h3>

            <p>
              Accessible learning platform prototype designed to support
              learners with different learning needs, including features
              focused on dyslexia and ADHD.
            </p>

            <div className="tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>AI</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-number">04</div>
            <h3>Automated Essay Feedback Generator</h3>

            <p>
              AI-powered application that analyzes essays and provides
              feedback on grammar, structure, clarity and overall
              writing quality.
            </p>

            <div className="tags">
              <span>JavaScript</span>
              <span>Gemini</span>
              <span>AI</span>
            </div>
          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section className="section education-section">
        <div className="section-heading">
          <p>MY ACADEMIC JOURNEY</p>
          <h2>Education</h2>
        </div>

        <div className="education-card">
          <div>
            <h3>Bachelor of Engineering</h3>
            <h4>Computer Science & Engineering</h4>
            <p>
              Jawaharlal Nehru New College of Engineering
            </p>
          </div>

          <div className="education-info">
            <strong>2024 – Present</strong>
            <span>3rd Year • 5th Semester</span>
            <span>CGPA: 9.1</span>
          </div>
        </div>

        <div className="education-card">
          <div>
            <h3>Pre-University</h3>
            <p>12th Standard</p>
          </div>

          <div className="education-info">
            <strong>95%</strong>
          </div>
        </div>

        <div className="education-card">
          <div>
            <h3>SSLC</h3>
            <p>10th Standard</p>
          </div>

          <div className="education-info">
            <strong>95%</strong>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="section">
        <div className="section-heading">
          <p>BEYOND THE CLASSROOM</p>
          <h2>Achievements & Activities</h2>
        </div>

        <div className="timeline">

          <div className="timeline-item">
            <span>01</span>
            <div>
              <h3>Smart India Hackathon</h3>
              <p>
                Shortlisted in the internal round of Smart India
                Hackathon.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span>02</span>
            <div>
              <h3>IEEE — MindMash</h3>
              <p>
                Coordinated the MindMash activity under the IEEE
                CSE department.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span>03</span>
            <div>
              <h3>Hackathons</h3>
              <p>
                Participated in Hack Fest 1.0, Nexora and other
                technical events.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span>04</span>
            <div>
              <h3>Technical Competitions</h3>
              <p>
                Participated in several technical competitions and
                collaborative activities.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section">
        <div className="section-heading">
          <p>LEARNING</p>
          <h2>Certifications</h2>
        </div>

        <div className="certificate-grid">

          <div className="certificate-card">
            <span>NPTEL</span>
            <h3>Introduction to Programming in C</h3>
            <p>Programming Fundamentals</p>
          </div>

          <div className="certificate-card featured">
            <span>NPTEL</span>
            <h3>Cloud Computing</h3>
            <p>Elite + Silver</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="section-heading">
          <p>GET IN TOUCH</p>
          <h2>Let's Connect</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Have an opportunity or idea?</h3>

            <p>
              Feel free to reach out. I'm always interested in learning,
              building new experiences, and collaborating on impactful
              work.
            </p>

            <div className="contact-detail">
              <strong>Email</strong>
              <span>jjamunajayanna2006@gmail.com</span>
            </div>

            <div className="contact-detail">
              <strong>Location</strong>
              <span>Shimoga, India</span>
            </div>

            <a
              href="https://www.linkedin.com/in/jamuna-j-aa9176345/"
              target="_blank"
              rel="noreferrer"
              className="linkedin-btn"
            >
              Connect on LinkedIn
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </section>

      <footer>
        <p>© 2025 Jamuna J. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;