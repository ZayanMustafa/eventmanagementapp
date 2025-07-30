




import Navbar from '@/componets/shared/Navbar';
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Footer from '@/componets/shared/Footer';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta' 
});

export const metadata = {
  title: 'SkillSphere | Master Tech Skills',
  description: 'Join workshops and courses to level up your career',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}