import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Features } from './pages/Features';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { DemoVideos } from './pages/DemoVideos';
import { TrustSafety } from './pages/TrustSafety';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="relative min-h-screen bg-nousna-white text-nousna-graphite overflow-x-hidden font-sans">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

        <Navbar />

        <div className="relative">
          <Routes>
            <Route path="/" element={<Home isLoading={isLoading} />} />
            <Route path="/features" element={<Features isLoading={isLoading} />} />
            <Route path="/product" element={<Product isLoading={isLoading} />} />
            <Route path="/about" element={<About isLoading={isLoading} />} />
            <Route path="/contact" element={<Contact isLoading={isLoading} />} />
            <Route path="/demo-videos" element={<DemoVideos />} />
            <Route path="/trust-and-safety" element={<TrustSafety isLoading={isLoading} />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
