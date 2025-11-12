import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { contactContent, schoolInfo, t } from '../data/content';
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const iconMap = {
  location: MapPinIcon,
  email: EnvelopeIcon,
  phone: PhoneIcon,
  clock: ClockIcon
};

function ContactCard({ card }) {
  const Icon = iconMap[card.icon];

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-tamil-red/10 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-tamil-red" />
        </div>
        <h3 className="text-xl font-bold text-tamil-red mb-3">
          {card.title}
        </h3>
        <div className="space-y-1">
          {card.lines.map((line, index) => (
            <p key={index} className="text-text-secondary">
              {line}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ContactPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-bg-cream">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tamil-red to-tamil-maroon text-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t(contactContent.pageTitle, language)}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              {t(contactContent.pageSubtitle, language)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-tamil-red mb-4">
              {contactContent.getInTouch}
            </h2>
            <p className="text-xl text-text-secondary">
              We'd love to hear from you! Reach out to us through any of the following channels.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactContent.contactCards.map((card, index) => (
              <ContactCard key={index} card={card} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-bg-warm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-tamil-red mb-8 text-center">
              Find Us Here
            </h2>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 h-[400px] md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.123456789!2d-122.3!3d37.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMzJzAwLjAiTiAxMjLCsDE4JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peninsula Tamil School Location"
                  className="w-full h-full"
                />
              </div>

              <div className="p-6 md:p-8 bg-gradient-to-br from-tamil-red/5 to-tamil-orange/5">
                <div className="flex items-start gap-4">
                  <MapPinIcon className="w-6 h-6 text-tamil-red flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-tamil-red mb-2">
                      {schoolInfo.address.venue}
                    </h3>
                    <p className="text-text-secondary text-lg">
                      {schoolInfo.address.full}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-tamil-orange to-tamil-gold rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {contactContent.enrollment.title}
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                {contactContent.enrollment.text}
              </p>
              <a
                href={schoolInfo.enrollmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-tamil-red font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Complete Enrollment Form
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="section-padding bg-bg-warm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-l-8 border-tamil-red">
              <h3 className="text-2xl md:text-3xl font-bold text-tamil-red mb-4">
                {contactContent.questions.title}
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                {contactContent.questions.text}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${schoolInfo.email}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-tamil-red text-white font-semibold rounded-lg shadow-md hover:bg-tamil-maroon hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <EnvelopeIcon className="w-5 h-5" />
                  Email Us
                </a>
                <a
                  href={`tel:${schoolInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-tamil-red font-semibold rounded-lg border-2 border-tamil-red hover:bg-bg-light-orange transition-all duration-200"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-tamil-red mb-6">
              Follow Us
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Stay connected with our community on social media
            </p>

            <div className="flex justify-center gap-6">
              <a
                href={schoolInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-tamil-red/10 rounded-full text-tamil-red hover:bg-tamil-red hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href={schoolInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-tamil-red/10 rounded-full text-tamil-red hover:bg-tamil-red hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
