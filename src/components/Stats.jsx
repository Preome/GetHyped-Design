import React from 'react';

const Stats = () => {
  return (
    <>
      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-7xl md:text-8xl font-bold text-black">10M+</div>
              <div className="text-xl font-semibold text-gray-800">Organische views</div>
              <div className="text-gray-500">Groei door slimme content</div>
            </div>
            
            <div className="space-y-4">
              <div className="text-7xl md:text-8xl font-bold text-black">30+</div>
              <div className="text-xl font-semibold text-gray-800">Merken geholpen</div>
              <div className="text-gray-500">Van start-up tot multinational</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-[#F5F5F0]">
        <div className="max-w-4xl mx-auto">
          {/* First paragraph */}
          <div className="text-center mb-12">
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-relaxed font-medium">
              Wij maken content die opvalt. Die blijft hangen. 
              Die jouw doelgroep raakt en jouw merk in beweging brengt. 
              Snel, krachtig en energiek.
            </p>
          </div>

          {/* Decorative element */}
          <div className="flex justify-center items-center gap-2 my-12">
            <div className="w-16 h-px bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-16 h-px bg-gray-300"></div>
          </div>

          {/* Second paragraph */}
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. 
              Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. 
              Nooit meer content zonder resultaat.
            </p>
          </div>

          {/* Button */}
          <div className="text-center">
            <a 
              href="#" 
              className="inline-block px-10 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Leer ons kennen
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;