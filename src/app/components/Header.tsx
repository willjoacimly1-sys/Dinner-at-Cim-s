import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-lg sticky top-0 z-50" style={{ background: 'linear-gradient(to right, #4d0026, #660033, #4d0026)' }}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-semibold text-amber-50 tracking-wide">
            Dinner at Cims
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10">
            <a href="#about" className="text-amber-100 hover:text-amber-50 transition-colors text-lg">
              Our Story
            </a>
            <a href="#menus" className="text-amber-100 hover:text-amber-50 transition-colors text-lg">
              Menus
            </a>
            <a href="#contact" className="text-amber-100 hover:text-amber-50 transition-colors text-lg">
              Contact
            </a>
            <a href="#hours" className="text-amber-100 hover:text-amber-50 transition-colors text-lg">
              Hours
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-amber-50 hover:text-amber-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-4 pt-6" style={{ borderTop: '1px solid #800040' }}>
            <div className="flex flex-col gap-4">
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-amber-100 hover:text-amber-50 transition-colors text-lg py-2"
              >
                Our Story
              </a>
              <a
                href="#menus"
                onClick={() => setIsOpen(false)}
                className="text-amber-100 hover:text-amber-50 transition-colors text-lg py-2"
              >
                Menus
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-amber-100 hover:text-amber-50 transition-colors text-lg py-2"
              >
                Contact
              </a>
              <a
                href="#hours"
                onClick={() => setIsOpen(false)}
                className="text-amber-100 hover:text-amber-50 transition-colors text-lg py-2"
              >
                Hours
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}