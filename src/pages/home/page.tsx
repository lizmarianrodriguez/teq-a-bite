import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ParticleProvider } from './components/ParticleProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Promotions from './components/Promotions';
import Story from './components/Story';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Social from './components/Social';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  useScrollReveal();

  return (
    <ParticleProvider>
      <div className="min-h-screen bg-background-50">
        <Navbar />
        <main>
          <Hero />
          <Promotions />
          <Story />
          <Menu />
          <Gallery />
          <Reviews />
          <Social />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ParticleProvider>
  );
}