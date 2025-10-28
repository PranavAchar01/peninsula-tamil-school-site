import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';

// Placeholder pages for other routes
function ComingSoon({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-cream">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-tamil-red mb-4">{title}</h1>
        <p className="text-xl text-text-secondary">Coming soon...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/about"
              element={<ComingSoon title="About Us" />}
            />
            <Route
              path="/classes"
              element={<ComingSoon title="Classes" />}
            />
            <Route
              path="/events"
              element={<ComingSoon title="Events" />}
            />
            <Route
              path="/gallery"
              element={<ComingSoon title="Gallery" />}
            />
            <Route
              path="/contact"
              element={<ComingSoon title="Contact" />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
