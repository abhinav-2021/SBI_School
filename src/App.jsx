import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Streams from './pages/Streams';
import Documents from './pages/Documents';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-school-accent selection:text-school-primary-dark">
        {/* Scroll restoration & back to top */}
        <ScrollToTop />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/streams" element={<Streams />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
