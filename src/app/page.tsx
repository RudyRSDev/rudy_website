import BackDrop from '@/components/BackDrop';
import Desktop from '@/components/Desktop';
import { Rnd } from 'react-rnd';

export default function Home() {
  return (
    <main className="flex h-screen w-auto">
      <div>
        <BackDrop />
        <Desktop />
      </div>
    </main>
  );
}
