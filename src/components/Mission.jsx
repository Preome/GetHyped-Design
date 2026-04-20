import React from 'react';

const Mission = () => {
  return (
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

        {/* Divider line */}
        <div className="w-20 h-0.5 bg-gray-300 mx-auto my-12"></div>

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
          <button className="px-10 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 text-lg">
            Leer ons kennen
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mission;