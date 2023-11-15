import React from "react";

const Steps = ({ numero, iconoSrc, titulo, texto }) => {
  return (
    <div className="flex flex-col items-center text-center mx-auto hover:scale-125 duration-1000 my-16">
      <div className="mb-4">
        <img src={iconoSrc} alt={`Paso ${numero}`} className="w-20 h-20" />
      </div>
      <h3 className="text-2xl font-semibold mb-2">{titulo}</h3>
      <p className="text-gray-700">{texto}</p>
    </div>
  );
};

export default Steps;
