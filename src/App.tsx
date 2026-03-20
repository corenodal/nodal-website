import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { NodesBackground } from './animations/NodesBackground';
import { Workflow } from './sections/Workflow';
import { Features } from './sections/Features';
import { MemorySection } from './sections/MemorySection';
import { TrustSection } from './sections/TrustSection';
import { Footer } from './sections/Footer';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-nodal-white text-nodal-graphite overflow-x-hidden font-sans">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <NodesBackground />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <Workflow />
        <Features />
        <MemorySection />
        <TrustSection />
        <Footer />
      </div>
    </main>
  );
}

export default App;
