import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <motion.h2 
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      <div className="skills-container">
        {Object.entries(skills).map(([category, skillList], index) => (
          <motion.div 
            key={category} 
            className="skill-category glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="category-title">{category}</h3>
            <div className="skill-tags">
              {skillList.map((skill, i) => (
                <motion.span 
                  key={skill} 
                  className="skill-tag"
                  whileHover={{ scale: 1.05, backgroundColor: 'var(--accent-blue)', color: '#fff' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
