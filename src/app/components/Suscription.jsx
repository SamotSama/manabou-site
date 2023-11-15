import React from 'react';

const Subscription = () => {
  return (
    <div className= "py-16">
      <div className="container mx-auto text-center">
        <p className="text-2xl font-semibold text-gray-700 mb-4">¡Ingresá tu email para recibir novedades!</p>
        <div className="flex text-gray-700 justify-center">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="border-red-600 border-2 text-gray-700 p-2 rounded-l"
          />
          <button className="bg-red-600 text-white px-4 rounded-r hover:scale-105 duration-1000">Inscribite</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;