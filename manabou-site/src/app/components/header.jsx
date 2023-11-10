import React from 'react';

const Header = () => {
  return (
    <div className="bg-amber-50 text-gray-700  h-5/6 flex items-center">
      <div className="container mx-auto flex items-center justify-between">
      <div>
        <h2 className="text-7xl font-bold mt-8">Descubre el mundo del japonés con <a href='#' className='duration-1000 hover:bg-red-600 hover:text-white hover:rounded-2xl'>Manabou.</a></h2>
        <h3 className='text-4xl mt-8'>¡Inicia tu viaje para aprender japonés de la mejor manera!</h3>
        <p className="text-xl mt-8">Explora nuestra guía definitiva para obtener conocimientos sólidos y sumergirte en este fascinante.</p>
      </div>
      <div>
        <img
          src="/girl.jpg"
          alt="BannerImg"
          className="w-5/6 h-5/6 object-cover rounded-2xl ml-auto mt-12"
        />
        </div>
      </div>
    </div>
  );
};

export default Header;