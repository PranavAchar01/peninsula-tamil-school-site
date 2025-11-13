import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { missionContent, t } from '../../data/content';

export default function Mission() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-gradient-to-br from-bg-warm to-bg-cream">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="inline-block px-4 py-2 bg-tamil-orange/10 text-tamil-orange font-semibold rounded-full text-sm">
              Our Purpose
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-tamil-red mb-6">
            {t(missionContent.title, language)}
          </h2>

          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            {t(missionContent.text, language)}
          </p>

          {/* Decorative elements */}
          <div className="mt-12 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="w-8 h-1 bg-gradient-to-r from-tamil-orange to-tamil-gold rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
