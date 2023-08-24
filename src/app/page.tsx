import BackDrop from '@/components/BackDrop';
import Desktop from '@/components/Desktop';

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
