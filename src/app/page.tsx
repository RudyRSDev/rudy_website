import BackDrop from '@/components/BackDrop';
import Desktop from '@/components/Desktop';
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <main className="flex h-screen w-auto">
      <Suspense fallback={<Loading />}>
        <div>
          <BackDrop />
          <Desktop />
        </div>
      </Suspense>
    </main>
  );
}
