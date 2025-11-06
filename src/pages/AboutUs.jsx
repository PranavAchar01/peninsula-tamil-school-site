import { useRef } from 'react';
import { useInView } from 'framer-motion';
import AboutHeader from '../components/aboutUs/aboutheader';
import MissionCards from '../components/aboutUs/MissionCards';
import AboutHistory from '../components/aboutUs/history';

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-bg-cream">
      <div ref={ref}>
        <AboutHeader isInView={isInView} />
        <MissionCards isInView={isInView} />
        <AboutHistory isInView={isInView} />
      </div>
    </section>
  );
}