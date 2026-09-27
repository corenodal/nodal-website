import { Fragment, type ReactNode } from 'react';

export const TrustLine = ({ items }: { items: ReactNode[] }) => (
  <>
    {items.map((item, i) => (
      <Fragment key={i}>
        {i > 0 && <span className="mx-2 text-nousna-graphite-soft/40">·</span>}
        {item}
      </Fragment>
    ))}
  </>
);
