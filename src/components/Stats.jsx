import React from 'react';

const Stats = () => {
  return (
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
  );
};

export default Stats;