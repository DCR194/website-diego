import { MailIcon, MessageIcon, SendIcon } from '../components/icons';

const Contact = () => {

  return (
    <section id="contact" className="scroll-mt-20">
      <h2 className="text-3xl flex items-center justify-center font-bold text-gray-900 mb-8">Contact Me</h2>
      <div className="grid">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-6">
            I'm always open to discussing new projects, creative ideas, or career opportunities.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MailIcon/>
              <span className="text-gray-600">diego.ciudadrealescalante@mail.utoronto.ca</span>
            </div>
            <div className="flex items-center gap-3">
              <MessageIcon/>
              <span className="text-gray-600">+1 (412) 805-4380</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;