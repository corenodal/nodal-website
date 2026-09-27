import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Features } from './pages/Features';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ForUkUsers } from './pages/ForUkUsers';
import { IntendedPurpose } from './pages/IntendedPurpose';
import { FAQs } from './pages/FAQs';
import { Legal } from './pages/Legal';
import { privacy, cookies, subProcessors } from './copy/legal';

export const UKRoutes = ({ isLoading }: { isLoading: boolean }) => (
  <Routes>
    <Route path="/" element={<Home isLoading={isLoading} />} />
    <Route path="/features" element={<Features isLoading={isLoading} />} />
    <Route path="/product" element={<Product isLoading={isLoading} />} />
    <Route path="/about" element={<About isLoading={isLoading} />} />
    <Route path="/contact" element={<Contact isLoading={isLoading} />} />
    <Route path="/for-uk-users" element={<ForUkUsers isLoading={isLoading} />} />
    <Route path="/intended-purpose" element={<IntendedPurpose isLoading={isLoading} />} />
    <Route path="/faqs" element={<FAQs isLoading={isLoading} />} />
    <Route path="/privacy" element={<Legal isLoading={isLoading} doc={privacy} />} />
    <Route path="/cookies" element={<Legal isLoading={isLoading} doc={cookies} />} />
    <Route path="/sub-processors" element={<Legal isLoading={isLoading} doc={subProcessors} />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);
