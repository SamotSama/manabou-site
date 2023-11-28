"use client";

import React, { useEffect, useRef } from "react";

const Map = () => {
  const mapContainerRef = useRef(null);
  const image = "/torii.png";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB72Ip-ZG3in0P_zvi8baQgudSb4DPLoV8&libraries=places`;
    script.defer = true;
    script.async = true;

    script.addEventListener("load", () => {
      const map = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: -34.6236287, lng: -58.4250252 },
        zoom: 12,
      });

      const markersData = [
        {
          id: 1,
          position: { lat: -34.5566435, lng: -58.4672053 },
          title: "Academia Yamashita",
          content:
            "Av. Congreso 2640, CP 1428, Capital Federal Tel/Fax: (011) 4784-8601",
        },
        {
          id: 2,
          position: { lat: -34.617516, lng: -58.3789131 },
          title: "Asociación Japonesa en la Argentina",
          content:
            "Av. Independencia 732 / 734, Capital Federal Tel: (011) 4300-1182",
        },
        {
          id: 3,
          position: { lat: -34.6153547, lng: -58.3992512 },
          title: "ATAKU Instituto Japonés",
          content:
            "Venezuela 2130, Balvanera, Capital Federal Tel: (011) 4941-1675",
        },
        {
          id: 4,
          position: { lat: -34.5957092, lng: -58.4084962 },
          title: "Buenos Aires Gogaku Center",
          content:
            "Mansilla 2728, CP 1425, Capital Federal Tel: (011) 4961-0248",
        },
        {
          id: 5,
          position: { lat: -34.6047385, lng: -58.3985765 },
          title: "Centro Cultural Rector Ricardo Rojas - SEUBE - UBA",
          content:
            "Av. Corrientes 2038, CP 1045, Capital Federal Tel: (011) 5285-4800",
        },
        {
          id: 6,
          position: { lat: -34.598613, lng: -58.4226879 },
          title: "Centro de E-learning UTN BA",
          content:
            "Medrano 951, 2° Piso, Capital Federal Tel: (011) 5235-0070 / 4867-7589",
        },
        {
          id: 7,
          position: { lat: -34.6179072, lng: -58.4497472 },
          title: "Centro de Idioma Japonés Narabayashi",
          content:
            'Avellaneda 1128 - 12o. "G", CP 1405, Capital Federal Tel.: (011) 4432-7820',
        },
        {
          id: 8,
          position: { lat: -34.6184364, lng: -58.5049025 },
          title: "Centro Integral Daiwa",
          content:
            "Pasaje Albania 4507, CP 1407, Capital Federal Tel: (011) 4567-0692",
        },
        {
          id: 9,
          position: { lat: -34.6020937, lng: -58.420184 },
          title: "Centro Nikkei Argentino",
          content:
            "Bulnes 841, CP 1176, Capital Federal Tel./Fax: (011) 4862-7774",
        },
        {
          id: 10,
          position: { lat: -34.6235666, lng: -58.4043803 },
          title: "Centro Okinawense en la Argentina",
          content:
            "Av. San Juan 2651, CP 1232, Capital Federal Tel/Fax: (011) 4941-0546",
        },
        {
          id: 11,
          position: { lat: -34.606883, lng: -58.4014715 },
          title: "Centro Universitario de Idiomas (CUI)",
          content:
            "Junín 222, CP 1026, Capital Federal Tel/Fax:(011) 5238-8000",
        },
        {
          id: 12,
          position: { lat: -34.6034257, lng: -58.3936156 },
          title: "Escuela de Lenguas Modernas, Universidad del Salvador",
          content:
            "Lavalle 1878/1854, C1051ABB, CABA, Argentina Tel: (54-11) 4372-5115",
        },
        {
          id: 13,
          position: { lat: -34.583155, lng: -58.3949755 },
          title: "Extensión Universitaria de la Facultad de Derecho UBA",
          content:
            "Av. Figueroa Alcorta 2263, C1425CKB, Capital Federal Tel: (011) 5287-7013",
        },
        {
          id: 14,
          position: { lat: -34.6050909, lng: -58.3732033 },
          title: "Facultad de Filosofía y Letras “Laboratorio de Idiomas”",
          content:
            "25 de mayo 221, P.B., Capital Federal Tel: (011) 4343-5981/ 1196",
        },
        {
          id: 15,
          position: { lat: -34.5906033, lng: -58.3837808 },
          title:
            'Instituto de Enseñanza Superior en Lenguas Vivas "Juan Ramón Fernández"',
          content:
            "Carlos Pellegrini 1515, CP 1011, Capital Federal Tel: (011) 4322-3992",
        },
        {
          id: 16,
          position: { lat: -34.6094998, lng: -58.4316518 },
          title: "Instituto Privado Argentino-Japonés (Nichia Gakuin)",
          content:
            "Yatay 261/ Pringles 268, CP 1184, Capital Federal Tel: (011) 4983-3310 / 0056 ",
        },
        {
          id: 17,
          position: { lat: -34.6007932, lng: -58.3782289 },
          title: 'Instituto Tozai "Oriente y Occidente"',
          content:
            "Lavalle 774, 6º “D”, CP 1047, Capital Federal Tel: (011) 4328-6484/",
        },
        {
          id: 18,
          position: { lat: -34.6236287, lng: -58.4250252 },
          title: "Interlenguas",
          content: "Tel: (+54 9) 11 3490 3688",
        },
        {
          id: 19,
          position: { lat: -34.5949266, lng: -58.4120356 },
          title: "Tokyo Lights Japanese Institute",
          content:
            "Agüero 1262, 6to 22, Barrio Norte, Capital Federal Tel: (011) 15-5324-4914",
        },
      ];

      markersData.forEach((markerData) => {
        const marker = new window.google.maps.Marker({
          position: markerData.position,
          map: map,
          title: markerData.title,
          icon: image,
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div>
              <h3 style="color: #dc2626;font-weight: bold;">${markerData.title}</h3>
              <p style="color: #374151;">${markerData.content}</p>
            </div>
          `,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      });
    });

    document.head.appendChild(script);
  }, []);

  return (
    <section
      id="institutos"
      className="container static mx-auto mt-16 flex flex-wrap text-gray-700"
    >
      <div className="w-full sm:w-1/2 pr-4 sm:pr-8 mt-2 sm:mt-0 ml-4 sm:ml-0">
        <h2 className="text-6xl font-semibold text-gray-700 ">
          Listado de Institutos
        </h2>
        <p className="text-2xl">
          En este mapa interactivo podras encontrar los mejores Institutos de
          CABA.
        </p>
      </div>
      <div className="w-full sm:w-1/2 mt-2 sm:mt-0 ml-4 sm:ml-0">
        <h3 className="text-2xl ">
          Proximamente añadiremos del resto del país.
        </h3>
      </div>
      <div
        ref={mapContainerRef}
        style={{ width: "100%", height: "700px", zIndex: "1" }}
        className="w-full shadow-xl shadow-gray-700 my-8 rounded-lg border-gray-700 border-2 animate-jump-in animate-once animate-duration-1000"
      ></div>
    </section>
  );
};

export default Map;
