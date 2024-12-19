import React from 'react';

const TeamValues = () => {
  const values = [
    { title: 'Innovation', description: 'We push boundaries and embrace new ideas' },
    { title: 'Collaboration', description: 'We work together to achieve greatness' },
    { title: 'Excellence', description: 'We strive for the highest quality in everything we do' },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamValues;