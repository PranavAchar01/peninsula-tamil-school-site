import Hero from '../components/home/Hero';
import Mission from '../components/home/Mission';
import QuickInfoCards from '../components/home/QuickInfoCards';
import ClassSchedule from '../components/home/ClassSchedule';
import EventsPreview from '../components/home/EventsPreview';
import LocationMap from '../components/home/LocationMap';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Mission />
      <QuickInfoCards />
      <ClassSchedule />
      <EventsPreview />
      <LocationMap />
    </div>
  );
}
