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
      
      {/* Menu Sections - To be rebuilt */}
      <section id="menus" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-semibold text-center mb-4 text-neutral-900">Our Menus</h2>
          <div className="w-24 h-1 mx-auto mb-16" style={{ background: 'linear-gradient(to right, transparent, #660033, transparent)' }}></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Food Menu */}
            <a 
              href="https://www.dropbox.com/scl/fi/lzbo502o9rfapfspxifxl/wed-menu.pdf?rlkey=nzex2a1dxe09osskt2wy90egd&st=eqcke8zb&dl=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-neutral-900 rounded-lg p-8 hover:shadow-lg transition-all duration-300 text-center"
            >
              <h3 className="text-2xl font-semibold text-neutral-900">Food</h3>
            </a>

            {/* Drinks Menu */}
            <a 
              href="https://www.dropbox.com/scl/fi/y4ktsx84xt4s5pvw1agt3/dinner-at-cim-drink-list-2025-1.pdf?rlkey=p0uapwgesv9zp9o7ok6ov8lrw&st=gq9tq3bg&dl=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-neutral-900 rounded-lg p-8 hover:shadow-lg transition-all duration-300 text-center"
            >
              <h3 className="text-2xl font-semibold text-neutral-900">Drinks</h3>
            </a>

            {/* Wine Menu */}
            <a 
              href="#"
              className="bg-white border-2 border-neutral-900 rounded-lg p-8 hover:shadow-lg transition-all duration-300 text-center"
            >
              <h3 className="text-2xl font-semibold text-neutral-900">Wine</h3>
            </a>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}