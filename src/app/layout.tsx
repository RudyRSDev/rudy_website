import './globals.css';
import { Inter, Roboto } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Rodolfo Sandoval [Rudy]',
  description: 'Rudy\'s Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <div>
        <body className={roboto.className}>{children}</body>
      </div>
    </html>
  );
}
