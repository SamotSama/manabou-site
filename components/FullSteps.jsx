import React from "react";
import Steps from "./Steps";
const Full = () => {
  return (
    <div className="flex text-gray-700 justify-between z">
      <Steps
        numero={1}
        iconoSrc="light.svg"
        titulo="Fase 1"
        texto="Aprender Hiragana y Katakana."
      />
      <Steps
        numero={2}
        iconoSrc="light.svg"
        titulo="Fase 2"
        texto="Iniciar con gramática."
      />
      <Steps
        numero={3}
        iconoSrc="light.svg"
        titulo="Fase 3"
        texto="Adentrarse en los Kanjis."
      />
    </div>
  );
};

export default Full;
