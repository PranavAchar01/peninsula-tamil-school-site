import { motion } from 'framer-motion';

const missions = [
  {
    title: 'Our Purpose',
    text: 'Peninsula Tamil School is dedicated to teaching Tamil language and culture to children and families, fostering a deep appreciation for Tamil heritage.',
  },
  {
    title: 'What We Do',
    text: 'We provide structured Tamil language classes for all age groups, celebrate Tamil festivals, and host cultural programs throughout the year.',
  },
  {
    title: 'Our Vision',
    text: 'We aim to build a strong, connected Tamil-speaking community that carries our language and traditions into the next generation.',
  },
];

export default function MissionCards({ isInView }) {
  return (
    <section className="py-20 bg-bg-warm">
      <div className="container-custom text-center">
        <motion.h2
          className="text-4xl font-bold text-tamil-red mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Mission
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {missions.map((mission, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-tamil-red mb-4">
                {mission.title}
              </h3>
              <p className="text-text-secondary">{mission.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
