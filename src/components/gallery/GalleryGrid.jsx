import { motion } from 'framer-motion';
import { useState } from 'react';
import { galleryContent, t } from '../../data/content';
import { useLanguage } from '../../context/LanguageContext';

const GalleryGrid = ({ images, onImageClick, selectedCategory }) => {
  const { language } = useLanguage();
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (id) => {
    setLoadedImages(prev => new Set([...prev, id]));
  };

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Card animation variants with creative entrance
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotate: -5
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          variants={cardVariants}
          layout
          layoutId={`gallery-${image.id}`}
          whileHover={{
            y: -8,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          className="group relative cursor-pointer"
          onClick={() => onImageClick(image)}
        >
          {/* Card Container with decorative elements */}
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-tamil-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <div className="absolute top-2 right-2 w-3 h-3 bg-tamil-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>

            {/* Image container with aspect ratio */}
            <div className="relative aspect-[4/3] overflow-hidden bg-bg-warm">
              {/* Loading skeleton */}
              {!loadedImages.has(image.id) && (
                <div className="absolute inset-0 bg-gradient-to-r from-bg-warm via-bg-light-orange to-bg-warm animate-pulse">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-tamil-orange border-t-transparent rounded-full animate-spin"></div>
                  </div>
                </div>
              )}

              {/* Main image */}
              <motion.img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                onLoad={() => handleImageLoad(image.id)}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Gradient overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-t from-tamil-maroon via-tamil-red/50 to-transparent"
              />

              {/* Hover icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                  <svg className="w-8 h-8 text-tamil-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </motion.div>
            </div>

            {/* Content section */}
            <div className="p-6 relative">
              {/* Decorative top border */}
              <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-tamil-gold to-transparent"></div>

              {/* Category badge */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-3"
              >
                <span className="px-3 py-1 bg-gradient-to-r from-tamil-orange/20 to-tamil-gold/20 text-tamil-red text-xs font-semibold rounded-full border border-tamil-orange/30">
                  {image.category.toUpperCase()}
                </span>
              </motion.div>

              {/* Title with creative underline */}
              <h3 className="text-xl font-serif font-bold text-text-primary mb-2 group-hover:text-tamil-red transition-colors duration-300">
                {image.title}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="h-0.5 bg-gradient-to-r from-tamil-red via-tamil-orange to-tamil-gold mt-1"
                />
              </h3>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed">
                {image.description}
              </p>

              {/* Decorative corner elements */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-tl from-tamil-orange/5 to-transparent rounded-tl-3xl pointer-events-none"></div>
            </div>

            {/* Sparkle effect on hover */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileHover={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 0.5
              }}
              className="absolute top-8 left-8 w-2 h-2 bg-tamil-gold rounded-full pointer-events-none"
            />
          </div>
        </motion.div>
      ))}

      {/* Empty state when no images match filter */}
      {images.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-full text-center py-20"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-tamil-orange/20 to-tamil-gold/20 flex items-center justify-center">
            <svg className="w-12 h-12 text-tamil-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
            {t(galleryContent.emptyState.title, language)}
          </h3>
          <p className="text-text-secondary">
            {t(galleryContent.emptyState.message, language)}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default GalleryGrid;
