//Author: Sujaritha Vampu

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Importing the icons
import "./App.css";
import { Typewriter } from "react-simple-typewriter";
import React from "react";


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleMode = () => setDarkMode(!darkMode);

  // useEffect for scroll-triggered animations on project cards and about section
  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');
    const aboutItems = document.querySelectorAll('.about-item');
    
    const handleScroll = () => {
      projectCards.forEach((card) => {
        if (card.getBoundingClientRect().top <= window.innerHeight) {
          card.classList.add('visible');
        }
      });

      aboutItems.forEach((item) => {
        if (item.getBoundingClientRect().top <= window.innerHeight) {
          item.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on initial load as well

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={darkMode ? "app" : "app dark"}>
      <header className="navbar">
        <div className="nav-content">
          <div className="logo-script"><a href="https://sujaritha-vampu.netlify.app/" target="_blank" rel="noreferrer">Sujaritha Vampu</a></div>
          <nav>
            <ul>
              <li><Link to="about" smooth={true} duration={500}>About</Link></li>
              <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
              <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
              <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
              <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
              <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
          </nav>
          </div>
        <button className="toggle" onClick={toggleMode}>
          {darkMode ? "🌠" : "🌞"}
        </button>
        
      </header>

      <div className="hero-wrapper">
        <div className="hero">
          <div className="hero-content">
            <h1>Hi, I'm Sujaritha Vampu</h1>
            <h2 className="typing">
              <Typewriter
                words={["Full Stack Developer", "Software Developer", "Python Developer", "Data Analyst"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
            <p className="intro-text">
  <span className="highlight">Full-Stack Developer</span> with a strong passion for building 
  scalable web applications and <span className="highlight">cloud-integrated solutions</span>. 
  With over two years of hands-on experience in 
  <span className="highlight"> backend development</span>, and
  <span className="highlight"> data migration</span>, I specialize in crafting robust systems 
  using <span className="highlight"> Python</span>, 
  <span className="highlight"> Java</span>, 
  <span className="highlight"> Node.js</span>, and 
  <span className="highlight"> React.js</span>. I thrive on solving complex problems and leveraging 
  <span className="highlight"> cloud platforms like AWS</span> to deliver efficient, secure, and 
  impactful applications. Currently, I’m exploring new opportunities to grow as a developer and 
  contribute to <span className="highlight"> innovative projects</span> that make a real difference.
</p>


            <div className="hero-buttons">
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/sujaritha-vampu" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/sujarithav" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="mailto:vampusujaritha@gmail.com" target="_blank" rel="noreferrer">
                  <FaEnvelope />
                </a>
              </div>
              <div className="resume-button">
                <a href="/SujarithaVampuResume.pdf" download className="btn">
                  Here's my resume
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image-container">
          <img src="/profile-image.png" alt="Sujaritha Vampu" />
        </div>
      </div>

      <section className="about" id="about">
  <h2>About Me</h2>
  <div className="about-item">
    <p>
      Over the span of <span className="highlight">2+ years</span> in the software industry, I have immersed myself in building 
      <span className="highlight"> scalable, full-stack applications</span> and streamlining backend systems. My journey began at 
      <span className="highlight"> Accenture</span>, where I worked as a Software Engineer contributing to the development and optimization 
      of <span className="highlight">enterprise-level applications, data migration, and cloud integrations</span>.
    </p>

    <p>
      Alongside my professional experience, I pursued my 
      <span className="highlight"> Master’s in Computer & Information Science</span> at 
      <span className="highlight"> IUPUI</span>, where I strengthened my foundation in 
      <span className="highlight"> software architecture, data mining, data engineering, and cloud technologies</span>.
    </p>

    <p>
      While my core strengths lie in 
      <span className="highlight"> Python, Java, JavaScript, Node.js, React.js, SQL, and AWS</span>, 
      I’ve had the opportunity to work across diverse tech stacks, from designing
      <span className="highlight"> RESTful APIs</span> to deploying applications on the 
      <span className="highlight"> cloud</span>. I'm driven by curiosity and a constant desire to 
      <span className="highlight"> learn, innovate, and build impactful solutions</span>.
    </p>
  </div>
</section>


      <section className="skills" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {[
            "Python", "Java", "JavaScript", "SQL","React.js", "Node.js", "Spring Boot", "MongoDB", "MySQL", "AWS", "Apache Kafka", "Spark", "Git", "Tableau" , "PowerBI", "HTML", "CSS", "PLM Teamcenter", "PLM Windchill", "Creo", "Solidworks", "CAD Integrations", "VS Code", "Microsoft Office", "SharePoint"
          ].map((skill) => (
            <span key={skill} className="skill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="education" id="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>🎓 Master's in Computer & Information Science</h3>
          <p>Indiana University - Purdue University Indianapolis (IUPUI)</p>
          <p>Graduated: Dec 2024</p>
        </div>
        <div className="education-item">
          <h3>🎓 Bachelor's in Electronics & Communication Engineering</h3>
          <p>CVR College of Engineering</p>
          <p>Graduated: Aug 2020</p>
        </div>
      </section>
      <section className="section" id="experience">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>💼 Application Development Analyst</h3>
          <div className="experience-meta">
  <h4>Accenture | Hyderabad, India</h4>
  <p><em>Jun 2022 – Jan 2023</em></p>
</div>

          <ul>
            <li>Developed REST APIs and automation scripts in Python, SQL, and Java to migrate data with 99% accuracy and reduced migration time by 40%.</li>
            <li>Deployed scalable ETL pipelines using Node.js and Express.js to automate data processing and transformation.</li>
            <li>Integrated AWS services (S3, Lambda) with APIs to ensure high-availability cloud storage and 30% downtime reduction.</li>
            <li>Built interactive Tableau and React.js dashboards for monitoring migration status in real-time, cutting error resolution time by 50%.</li>
            <li>Designed and implemented multi-tier architectures (2-tier, 4-tier) for optimized frontend-backend communication.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>💼 Application Development Associate</h3>
          <div className="experience-meta">
          <h4>Accenture | Hyderabad, India</h4>
          <p><em>Sep 2020 – May 2022</em></p>
          </div>
          <ul>
            <li>Automated backend workflows and ETL pipelines using Python, SQL, and Java, reducing processing time by up to 90%.</li>
            <li>Built full-stack applications with React.js and Node.js to improve data accessibility and team collaboration.</li>
            <li>Designed microservices and managed PostgreSQL/MongoDB schemas to boost query performance by 50%.</li>
            <li>Led CI/CD pipeline creation for DevOps deployments, enabling zero-downtime releases for enterprise applications.</li>
            <li>Contributed to system upgrades for Teamcenter and Active Workspace, ensuring seamless user transitions.</li>
            <li>Collaborated across teams via SharePoint, ensuring seamless documentation and version control for cross-functional projects.</li>
          </ul>
        </div>
      </section>



      <section className="projects" id="projects">
  <h2>Projects</h2>

  <div className="project-card">
    <h3>
    <svg className="project-icon" viewBox="0 0 24 24">
        <path d="M10 4H2v16h20V6H12l-2-2z" />
      </svg>
      <a href="https://expense-tracker-sujaritha-vampus-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
        Expense Tracker App
      </a> | <span className="tech-stack">React.js, Node.js, MongoDB</span>
    </h3>
    <ul>
      <li>Built a full-stack Expense Tracker using React.js, Node.js, and MongoDB.</li>
      <li>Deployed the frontend and backend with MongoDB Atlas integration, ensuring real-time tracking and 99.9% uptime.</li>
    </ul>
  </div>

  <div className="project-card">
    <h3>
    <svg className="project-icon" viewBox="0 0 24 24">
        <path d="M10 4H2v16h20V6H12l-2-2z" />
      </svg>
      <a href="https://expense-tracker-sujaritha-vampus-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Library Management System </a> | <span className="tech-stack">Spring Boot, React.js, MySQL</span>
    </h3>
    <ul>
      <li>Developed a book tracking system with Spring Security, JWT authentication, and automated email reminders for due dates.</li>
      <li>Optimized database queries by 40% and implemented a responsive React.js UI for seamless user experience.</li>
    </ul>
  </div>

  <div className="project-card">
    <h3>
    <svg className="project-icon" viewBox="0 0 24 24">
        <path d="M10 4H2v16h20V6H12l-2-2z" />
      </svg>
      <a href="https://github.com/SujarithaV/Named_Entity_Recognition.git" target="_blank" rel="noopener noreferrer">
        Named Entity Recognition
      </a> | <span className="tech-stack">Python, Jupyter Notebook, TensorFlow, Keras</span>
    </h3>
    <ul>
      <li>Built an NER model using embedding layers, BiLSTM, and Time-Distributed layers, achieving 98.4% accuracy.</li>
      <li>Addressed overfitting and generalization challenges, enhancing model robustness for NLP applications.</li>
    </ul>
  </div>


  <div className="project-card">
    <h3>
    <svg className="project-icon" viewBox="0 0 24 24">
        <path d="M10 4H2v16h20V6H12l-2-2z" />
      </svg>
      <a href="https://github.com/SujarithaV/Named_Entity_Recognition.git" target="_blank" rel="noopener noreferrer">Employee Attendance System with Face Recognition </a> | <span className="tech-stack">Python, TensorFlow, Flask, OpenCV</span>
    </h3>
    <ul>
      <li>Created an automated attendance system using TensorFlow-based facial recognition for identity verification.</li>
      <li>Integrated with Flask API and PostgreSQL, reducing attendance fraud by 95%.</li>
    </ul>
  </div>
</section>


<section className="contact" id="contact">
  <h2>Get In Touch</h2>
  <p>If you'd like to work together, discuss an opportunity, or just say hello — feel free to reach out!</p>

  <form
  className="contact-form"
  action="https://formspree.io/f/myzwgdyv"  
  method="POST"
>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" rows="5" required />
  <button type="submit" className="contact-btn">Send Message</button>
</form>


  <div className="social-links">
    <a href="https://github.com/sujarithaV" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
    <a href="https://linkedin.com/in/sujaritha-vampu" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
  </div>
</section>


  <footer>
    <p>© {new Date().getFullYear()} Sujaritha Vampu. All rights reserved.</p>
  </footer>
</div>
  );
}

export default App;
