import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { NodesBackground } from './animations/NodesBackground';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './pages/Home';
import { Product } from './pages/Product';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="relative min-h-screen bg-nodal-white text-nodal-graphite overflow-x-hidden font-sans">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

        <NodesBackground />
        <Navbar />

        <div className="relative">
          <Routes>
            <Route path="/" element={<Home isLoading={isLoading} />} />
            <Route path="/product" element={<Product isLoading={isLoading} />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
