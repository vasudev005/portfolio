import React, { useState, useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import './ContactStyles.css';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    // ── EmailJS integration ──────────────────────────────────────────────────
    // 1. Go to https://www.emailjs.com and create a free account
    // 2. Create a Service, Email Template, and note your Public Key
    // 3. Install: npm install @emailjs/browser
    // 4. Replace the three placeholders below and uncomment the block
    // ────────────────────────────────────────────────────────────────────────
    /*
    import emailjs from '@emailjs/browser';
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',      // ← replace
        'YOUR_TEMPLATE_ID',     // ← replace
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
        'YOUR_PUBLIC_KEY'       // ← replace
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
    */

    // Fallback: open default mail client
    const mailBody = `Name: ${form.name}%0AEmail: ${form.email}%0ASubject: ${form.subject}%0A%0A${form.message}`;
    window.location.href = `mailto:${Bio.email}?subject=${encodeURIComponent(form.subject)}&body=${mailBody}`;
    setStatus('success');
    setLoading(false);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Contact Me</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Feel free to reach out for collaborations or just a friendly hello 🚀
        </p>

        <div className="contact-wrapper">
          {/* ── Left Info ───────────────────────────── */}
          <div className="contact-info" data-aos="fade-right">
            <h3 className="contact-info-title">Email Me 📬</h3>
            <p className="contact-info-desc">
              Have a project in mind, a question, or just want to connect? Send me a message and I'll get back to you as soon as possible.
            </p>

            <div className="contact-links">
              <a href={`mailto:${Bio.email}`} className="contact-link-item">
                <span className="contact-link-icon"><FaEnvelope /></span>
                <div>
                  <span className="contact-link-label">Email</span>
                  <span className="contact-link-value">{Bio.email}</span>
                </div>
              </a>
              <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <span className="contact-link-icon linkedin"><FaLinkedin /></span>
                <div>
                  <span className="contact-link-label">LinkedIn</span>
                  <span className="contact-link-value">vasu-dev-datta</span>
                </div>
              </a>
              <a href={Bio.github} target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <span className="contact-link-icon github"><FaGithub /></span>
                <div>
                  <span className="contact-link-label">GitHub</span>
                  <span className="contact-link-value">vasudev005</span>
                </div>
              </a>
            </div>
          </div>

          {/* ── Right Form ──────────────────────────── */}
          <div className="contact-form-wrap" data-aos="fade-left">
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Vasudev Datta"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration / Internship / Just saying hi"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="contact-submit-btn" disabled={loading}>
                {loading ? (
                  <span className="btn-spinner" />
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="form-status success">✅ Message sent! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="form-status error">❌ Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
