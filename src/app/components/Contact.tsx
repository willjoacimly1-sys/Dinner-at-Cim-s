import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <>
      {/* Contact Info Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-semibold text-center mb-4 text-neutral-900">Contact Us</h2>
          <div className="w-24 h-1 mx-auto mb-16" style={{ background: 'linear-gradient(to right, transparent, #660033, transparent)' }}></div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center text-center">
              <div className="p-5 rounded-full mb-6 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #4d0026, #660033)' }}>
                <MapPin className="w-7 h-7 text-amber-50" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-neutral-900">Address</h3>
              <p className="text-neutral-600 text-lg">Hẻm 86B Trần Phú, Vila 30<br />Nha Trang</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="p-5 rounded-full mb-6 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #4d0026, #660033)' }}>
                <Phone className="w-7 h-7 text-amber-50" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-neutral-900">Phone</h3>
              <p className="text-neutral-600 text-lg">0795852283</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="p-5 rounded-full mb-6 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #4d0026, #660033)' }}>
                <Mail className="w-7 h-7 text-amber-50" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-neutral-900">Email</h3>
              <p className="text-neutral-600 text-lg">joacimkrantz@gmail.com</p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-lg overflow-hidden shadow-2xl h-[450px]" style={{ borderWidth: '4px', borderColor: '#660033' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19776.081960281124!2d109.20326118508939!3d12.242016301342707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170679ac0794a6d%3A0x37067dab6503f508!2sDinner%20at%20Cim%27s%20European%20Steakhouse!5e0!3m2!1sen!2s!4v1772803159659!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section id="hours" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-50 to-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="p-5 rounded-full mb-6 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #4d0026, #660033)' }}>
              <Clock className="w-8 h-8 text-amber-50" />
            </div>
            <h2 className="text-5xl font-semibold text-neutral-900 mb-4">Kitchen Opened From</h2>
            <div className="w-24 h-1" style={{ background: 'linear-gradient(to right, transparent, #660033, transparent)' }}></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-10" style={{ borderTop: '4px solid #660033' }}>
            <div className="space-y-6">
              <div className="flex justify-between items-center py-4 border-b border-stone-200">
                <span className="font-semibold text-neutral-900 text-xl">Monday</span>
                <span className="text-neutral-600 text-lg">Closed</span>
              </div>
              <div className="flex justify-between items-center py-4">
                <span className="font-semibold text-neutral-900 text-xl">Tuesday - Sunday</span>
                <span className="text-neutral-600 text-lg">5:00 PM - 9:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-amber-50 py-10 px-4" style={{ background: 'linear-gradient(to right, #4d0026, #660033, #4d0026)' }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-amber-100 text-lg">&copy; 2026 Dinner at Cims. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}