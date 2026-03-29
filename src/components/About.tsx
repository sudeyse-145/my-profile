import { motion } from 'framer-motion';
import './About.css';
import profile from '../assets/PP.jpg';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <motion.h2 
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      
      <div className="about-content">
        <motion.div 
          className="about-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="image-glow"></div>
          <img 
             src={profile}
            alt="Profile" 
            className="profile-image" 
          />
        </motion.div>
        
        <motion.div 
          className="about-text glass"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>A bit about myself</h3>
          <p>
            I am a recent Computer Science graduate with a strong passion for software development.
            My journey in tech has equipped me with a solid foundation in both frontend and backend 
            technologies, enabling me to build complete, functional, and visually appealing web applications.
          </p>
          <p>
            I love to solve complex problems and am constantly learning new tools and frameworks to stay 
            ahead in the fast-paced tech landscape. Currently exploring advanced React concepts and modern 
            architectures.
          </p>
          
          <div className="stats-container">
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years of Coding</span>
            </div>
            <div className="stat">
              <span className="stat-number">6+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat">
              <span className="stat-number">1</span>
              <span className="stat-label">CS Degree</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
