import { integrationLabel } from '@/data/profile';

// Keep evidence as a sentence, not a dashboard-like counter strip.
export default function Metrics() {
  return <p className="hero-proof"><strong>{integrationLabel}</strong> across my career.<br />Two independent apps published on the App Store.</p>;
}
