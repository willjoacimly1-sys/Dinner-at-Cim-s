import { FileText, ExternalLink } from 'lucide-react';

export function MenuSection() {
  return (
    <section id="menus" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-semibold text-center mb-4 text-neutral-900">Our Menus</h2>
        <div className="w-24 h-1 mx-auto mb-16" style={{ background: 'linear-gradient(to right, transparent, #660033, transparent)' }}></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Food Menu */}
          <div className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-[#660033]" style={{ borderColor: 'transparent' }}>
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <div className="p-5 rounded-full shadow-md" style={{ background: 'linear-gradient(to bottom right, #4d0026, #660033)' }}>
                  <FileText className="w-10 h-10 text-amber-50" />
                </div>
              </div>
              <h3 className="font-semibold text-2xl text-center mb-6 text-neutral-900">Food</h3>
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-white text-lg transition-all duration-300 hover:opacity-90"
                style={{ background: 'linear-gradient(to right, #4d0026, #660033)' }}
              >
                View Menu
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Drinks Menu */}
          <div className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-[#660033]" style={{ borderColor: 'transparent' }}>
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <div className="p-5 rounded-full shadow-md" style={{ background: 'linear-gradient(to bottom right, #4d0026, #660033)' }}>
                  <FileText className="w-10 h-10 text-amber-50" />
                </div>
              </div>
              <h3 className="font-semibold text-2xl text-center mb-6 text-neutral-900">Drinks</h3>
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-white text-lg transition-all duration-300 hover:opacity-90"
                style={{ background: 'linear-gradient(to right, #4d0026, #660033)' }}
              >
                View Menu
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Wines Menu */}
          <div className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-[#660033]" style={{ borderColor: 'transparent' }}>
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <div className="p-5 rounded-full shadow-md" style={{ background: 'linear-gradient(to bottom right, #4d0026, #660033)' }}>
                  <FileText className="w-10 h-10 text-amber-50" />
                </div>
              </div>
              <h3 className="font-semibold text-2xl text-center mb-6 text-neutral-900">Wines</h3>
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-white text-lg transition-all duration-300 hover:opacity-90"
                style={{ background: 'linear-gradient(to right, #4d0026, #660033)' }}
              >
                View Menu
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}