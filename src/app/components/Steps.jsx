
import React from 'react';

const Steps = ({ numero, iconoSrc, titulo, texto }) => {
  return (
    <div className="flex flex-col items-center text-center mx-auto hover:scale-105 duration-1000">
      <div className="mb-4">
        <img src={iconoSrc} alt={`Paso ${numero}`} className="w-16 h-16" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{titulo}</h3>
      <p className="text-gray-700">{texto}</p>
    </div>
  );
};

export default Steps;
