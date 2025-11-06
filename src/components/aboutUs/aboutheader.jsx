import { motion } from 'framer-motion';

export default function AboutHeader({ isInView }) {
  return (
    <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-tamil-red via-tamil-orange to-bg-cream text-white overflow-hidden">
      <motion.div
        className="text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          About Peninsula Tamil School
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
          Preserving our Tamil heritage through language, culture, and community.
        </p>
      </motion.div>
      <div className="absolute inset-0 bg-black/20"></div>
    </section>
  );
}
