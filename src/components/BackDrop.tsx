'use client';

import Spline from '@splinetool/react-spline';

export default function BackDrop() {
  return (
    <div className="absolute inset-0 -z-50">
      <Spline scene="https://prod.spline.design/mfczDwdvP-YfEmcr/scene.splinecode" />
    </div>
  );
}
