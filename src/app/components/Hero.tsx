import heroImage from 'figma:asset/2bba7bcac7c569129fe7c1c5b5b93c999118dd24.png';

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(102, 0, 51, 0.7), rgba(102, 0, 51, 0.5), rgba(0, 0, 0, 0.7))' }}></div>
      </div>
      <div className="relative z-10 text-center text-amber-50 px-4">
        <div className="mb-6">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
        </div>
        <h1 className="text-6xl md:text-7xl font-semibold mb-6 tracking-wide">Dinner at Cims</h1>
        <p className="text-2xl md:text-3xl font-light tracking-wider text-amber-100">Like Dining in the Chef's Home</p>
        <div className="mt-6">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  );
}