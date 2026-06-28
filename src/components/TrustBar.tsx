import { Link } from 'react-router-dom';

export const TrustBar = () => (
  <div className="absolute top-28 left-0 right-0 z-20 text-center px-6">
    <p className="text-xs text-nodal-graphite-soft font-light tracking-wide">
      HIPAA aligned
      <span className="mx-2 text-nodal-graphite-soft/40">·</span>
      <Link
        to="/contact"
        className="underline decoration-nodal-graphite-soft/30 underline-offset-2 hover:text-nodal-blue transition-colors"
      >
        BAA available
      </Link>
      <span className="mx-2 text-nodal-graphite-soft/40">·</span>
      Your data is never used to train AI models
      <span className="mx-2 text-nodal-graphite-soft/40">·</span>
      Outputs reviewed by a clinician
    </p>
  </div>
);
