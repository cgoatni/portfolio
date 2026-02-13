import ContactForm from '../component/ContactForm';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h1 className="contact-title font-heading">Get in Touch</h1>
        <p className="contact-description font-body">
          I’m open to opportunities and collaborations. Please fill out the form below, and I’ll respond promptly.
        </p>
        <ContactForm />
      </div>
    </section>

  );
}

export default Contact;
