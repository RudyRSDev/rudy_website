'use client'

import BackDrop from '@/components/BackDrop';
import Desktop from '@/components/Desktop';
import Mobile from "@/components/Mobile";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 960) {
      setIsMobile(true);
    }
    else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="flex h-screen w-auto">
      <Suspense fallback={<Loading />}>
        <div>
          <BackDrop />
          {isMobile ? <Mobile /> : <Desktop />}
          {/* <Desktop /> */}
        </div>
      </Suspense>
    </main>
  );
}
