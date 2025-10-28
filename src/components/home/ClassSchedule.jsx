import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { schoolInfo } from '../../data/content';

const scheduleItems = [
  {
    icon: ClockIcon,
    title: 'When',
    details: [schoolInfo.schedule.day, schoolInfo.schedule.time],
  },
  {
    icon: MapPinIcon,
    title: 'Where',
    details: [
      schoolInfo.address.venue,
      schoolInfo.address.street,
      `${schoolInfo.address.city}, ${schoolInfo.address.state} ${schoolInfo.address.zip}`,
    ],
  },
  {
    icon: UserGroupIcon,
    title: 'Who',
    details: [schoolInfo.schedule.students, schoolInfo.schedule.welcome],
  },
];

export default function ClassSchedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-br from-tamil-red to-tamil-maroon text-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Class Schedule
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Join us every Sunday for engaging Tamil language lessons
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {scheduleItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                <div className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-white/90 font-medium leading-relaxed"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
