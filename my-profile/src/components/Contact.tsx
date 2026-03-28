import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <motion.h2 
        className="section-title text-gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-container">
        <motion.div 
          className="contact-info glass"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Let's talk about everything!</h3>
          <p>Don't like forms? Send me an email. 👋</p>
          
          <div className="info-items">
            <div className="info-item">
              <FiMail className="info-icon" />
              <span>sudeyse145@gmail.com</span>
            </div>
            <div className="info-item">
              <FiPhone className="info-icon" />
              <span>+251912824131</span>
            </div>
            <div className="info-item">
              <FiMapPin className="info-icon" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form glass"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-group">
            <input type="text" placeholder="Your Name" required className="form-control" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" required className="form-control" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" required className="form-control" />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" required className="form-control" rows={5}></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn">
            <FiSend /> Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
