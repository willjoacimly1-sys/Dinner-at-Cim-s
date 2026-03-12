import { Heart, Users, ChefHat } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-semibold text-center mb-4 text-neutral-900">Our Story</h2>
        <div className="w-24 h-1 mx-auto mb-16" style={{ background: 'linear-gradient(to right, transparent, #660033, transparent)' }}></div>
        
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-neutral-700 text-xl leading-relaxed mb-6">
            With a passion for good food, especially steaks, we decided in 2018 to open our family home, a vintage style villa in the heart of Nha Trang, for dining guests.
          </p>
          <p className="text-neutral-700 text-xl leading-relaxed mb-6">
            Delicious cooking, excellent wines and a warm hearted family style service is what you can expect when dining with us.
          </p>
          <p className="text-neutral-700 text-xl leading-relaxed mb-6">
            Our aim is to give you a memorable and unique dining experience with inspiration of Swedish/French hospitality and cooking tradition.
          </p>
          <p className="text-neutral-700 text-xl leading-relaxed">
            We hope to see you in our home soon!
          </p>
        </div>
      </div>
    </section>
  );
}