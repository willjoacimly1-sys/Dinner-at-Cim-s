import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50" style={{ fontFamily: 'Cormorant, serif' }}>
      <Header />
      <Hero />
      <About />
      
      {/* Menu Sections */}
      <section id="menus" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-semibold text-center mb-4 text-neutral-900">Our Menus</h2>
          <div className="w-24 h-1 mx-auto mb-16" style={{ background: 'linear-gradient(to right, transparent, #660033, transparent)' }}></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Food Menu */}
            <a 
              href="/food-menu.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-neutral-900 rounded-lg p-8 hover:shadow-lg transition-all duration-300 text-center block"
            >
              <h3 className="text-2xl font-semibold text-neutral-900">Food Menu</h3>
            </a>

            {/* Drinks Menu */}
            <a 
              href="/drinks-menu.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-neutral-900 rounded-lg p-8 hover:shadow-lg transition-all duration-300 text-center block"
            >
              <h3 className="text-2xl font-semibold text-neutral-900">Drinks Menu</h3>
            </a>

            {/* Wine Menu */}
            <a 
              href="/wine-menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-neutral-900 rounded-lg p-8 hover:shadow-lg transition-all duration-300 text-center block"
            >
              <h3 className="text-2xl font-semibold text-neutral-900">Wine Menu</h3>
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}