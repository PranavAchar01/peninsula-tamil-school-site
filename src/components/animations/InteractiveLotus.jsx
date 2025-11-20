import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function InteractiveLotus() {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Load Sketchfab API script
    const script = document.createElement('script');
    script.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
      style={{
        background: 'radial-gradient(circle, rgba(249, 168, 37, 0.1) 0%, rgba(0,0,0,0) 70%)',
      }}
    >
      {/* Sketchfab 3D Model Embed */}
      <iframe
        ref={iframeRef}
        title="Lotus Flower Blooming Animation"
        className="w-full h-full border-0"
        src="https://sketchfab.com/models/771bfb8b865d47ba96b1ebb333029cfd/embed?autostart=1&autospin=0.2&ui_controls=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_hint=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_watermark=0&ui_color=transparent&scrollwheel=0&transparent=1&preload=1"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
      />

      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          boxShadow: '0 0 40px rgba(249, 168, 37, 0.3), inset 0 0 40px rgba(249, 168, 37, 0.1)',
        }}
        animate={{
          boxShadow: [
            '0 0 40px rgba(249, 168, 37, 0.3), inset 0 0 40px rgba(249, 168, 37, 0.1)',
            '0 0 60px rgba(249, 168, 37, 0.5), inset 0 0 60px rgba(249, 168, 37, 0.2)',
            '0 0 40px rgba(249, 168, 37, 0.3), inset 0 0 40px rgba(249, 168, 37, 0.1)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Interactive label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white/60 text-sm whitespace-nowrap"
      >
        3D Interactive Lotus
      </motion.div>
    </motion.div>
  );
}
