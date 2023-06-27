import BackDrop from '@/components/BackDrop';
import Desktop from '@/components/Desktop';

export default function Home() {
  return (
    <main className="h-screen w-full">
      <div>
        <Desktop />
        <BackDrop />
      </div>
    </main>
  );
}
