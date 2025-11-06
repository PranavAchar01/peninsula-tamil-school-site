import { motion } from 'framer-motion';

export default function history({ isInView }) {
  return (
    <section className="py-20 bg-gradient-to-br from-bg-cream via-bg-warm to-bg-cream">
      <div className="container-custom">
        <motion.h2
          className="text-4xl font-bold text-center text-tamil-red mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10 leading-relaxed text-text-secondary"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6">
            Peninsula Tamil School was founded by a group of passionate Tamil parents and volunteers who wanted to pass on their language and traditions to the next generation. Starting with just a few students, the school has grown into a vibrant community that welcomes families from across the Bay Area.
          </p>
          <p>
            Through consistent dedication, cultural events, and an engaging curriculum, the school continues to nurture a love for Tamil among young learners while strengthening community bonds.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
