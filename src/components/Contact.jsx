import "./style/Contact.css";
import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "react-hot-toast";

export const Contact = ({ showForm = true }) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    setTimeout(() => {
      toast.success(
        "Email sent successfully. Thank you for your message. I'll get back to you soon."
      );
      setIsSubmit(false);
    }, 1500);
  };

  return (
    <section id="contacts" className="contact-section">
      <div className="projects-header">
        <div className="title-with-line">
          <h2>
            <span className="hash">#</span>contacts
          </h2>
          <div className="line skills-line"></div>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-text">
            <h2 className="contact-title">
              Get In <span className="primary-text">Touch</span>
            </h2>
            <p>
              Whether you have a project in mind, need a website built, or just
              want to say hello, I’d love to hear from you. I’m always open to
              discussing new ideas, potential collaborations, or answering any
              questions you might have.
            </p>
          </div>

          {showForm && (
            <div className="contact-form-wrapper">
              <h3>Send a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe..."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="johnDoe@gmail.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmit}
                  className="button-cosmic"
                >
                  {isSubmit ? "Sending" : "Send Message"} <Send size={16} />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
