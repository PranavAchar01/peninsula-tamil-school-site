import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  AcademicCapIcon,
  BookOpenIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { quickInfoCards } from '../../data/content';

const icons = {
  0: AcademicCapIcon, // About Us
  1: BookOpenIcon, // Classes
  2: UserGroupIcon, // Enrollment
};

export default function QuickInfoCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-tamil-red mb-4">
            Get Started
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Join our community and embark on a journey to learn Tamil language
            and culture
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {quickInfoCards.map((card, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="group"
              >
                <div className="card hover:shadow-xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-tamil-orange to-tamil-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-tamil-red mb-3">
                    {card.title}
                  </h3>

                  <p className="text-text-secondary mb-6 flex-grow leading-relaxed">
                    {card.description}
                  </p>

                  {card.external ? (
                    <a
                      href={card.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-tamil-red font-semibold hover:text-tamil-orange transition-colors group-hover:translate-x-1 transition-transform duration-300"
                    >
                      {card.linkText}
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      to={card.linkUrl}
                      className="inline-flex items-center text-tamil-red font-semibold hover:text-tamil-orange transition-colors group-hover:translate-x-1 transition-transform duration-300"
                    >
                      {card.linkText}
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
