import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Lightbox = ({ image, images, onClose, onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const index = images.findIndex(img => img.id === image.id);
    setCurrentIndex(index);
  }, [image, images]);

  useEffect(() => {
    // Close on Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
      onNavigate(images[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
      onNavigate(images[currentIndex - 1]);
    }
  };

  // Slide animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.3 }
      }
    })
  };

  const currentImage = images[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-tamil-maroon/95 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      {/* Decorative background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-40 h-40 border-4 border-tamil-gold/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -right-20 w-60 h-60 border-4 border-tamil-orange/10 rounded-lg rotate-45"
        />
      </div>

      {/* Close button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-14 h-14 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 border-2 border-white/20 group"
        aria-label="Close"
      >
        <svg className="w-7 h-7 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </motion.button>

      {/* Main content container */}
      <div
        className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-w-7xl w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8">

            {/* Image container */}
            <div className="relative flex-1 w-full lg:w-2/3">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentImage.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative"
                >
                  {/* Decorative frame */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-tamil-gold via-tamil-orange to-tamil-red opacity-20 blur-2xl rounded-3xl" aria-hidden="true"></div>

                  <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <img
                      src={currentImage.src}
                      alt={currentImage.alt}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />

                    {/* Image counter badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute top-4 left-4 px-4 py-2 bg-tamil-maroon/80 backdrop-blur-sm text-white rounded-full font-medium shadow-lg"
                    >
                      {currentIndex + 1} / {images.length}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
                {/* Previous Button */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className={`
                    pointer-events-auto w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center
                    transition-all duration-300 backdrop-blur-md border-2 min-w-[56px] min-h-[56px]
                    ${currentIndex === 0
                      ? 'bg-gray-500/20 text-gray-400 border-gray-400/20 cursor-not-allowed'
                      : 'bg-white/20 hover:bg-white/30 text-white border-white/30 shadow-lg'
                    }
                  `}
                  aria-label={`Previous image (${currentIndex} of ${images.length})`}
                  aria-disabled={currentIndex === 0}
                >
                  <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>

                {/* Next Button */}
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNext}
                  disabled={currentIndex === images.length - 1}
                  className={`
                    pointer-events-auto w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center
                    transition-all duration-300 backdrop-blur-md border-2 min-w-[56px] min-h-[56px]
                    ${currentIndex === images.length - 1
                      ? 'bg-gray-500/20 text-gray-400 border-gray-400/20 cursor-not-allowed'
                      : 'bg-white/20 hover:bg-white/30 text-white border-white/30 shadow-lg'
                    }
                  `}
                  aria-label={`Next image (${currentIndex + 2} of ${images.length})`}
                  aria-disabled={currentIndex === images.length - 1}
                >
                  <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Info panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-full lg:w-1/3 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              {/* Category badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 bg-tamil-gold text-tamil-maroon text-sm font-bold rounded-full shadow-lg">
                  {currentImage.category.toUpperCase()}
                </span>
              </motion.div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
                {currentImage.title}
              </h2>

              {/* Decorative divider */}
              <div className="w-20 h-1 bg-gradient-to-r from-tamil-gold to-tamil-orange rounded-full mb-6"></div>

              {/* Description */}
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                {currentImage.description}
              </p>

              {/* Keyboard hints */}
              <div className="space-y-2 text-white/60 text-sm" aria-label="Keyboard shortcuts">
                <p className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-white/10 rounded border border-white/20" aria-label="Left arrow key">←</kbd>
                  <kbd className="px-2 py-1 bg-white/10 rounded border border-white/20" aria-label="Right arrow key">→</kbd>
                  <span>Navigate between images</span>
                </p>
                <p className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-white/10 rounded border border-white/20" aria-label="Escape key">Esc</kbd>
                  <span>Close lightbox</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Lightbox;
