"use client";

import React, { useState } from "react";

const CharacterCard = ({ hiragana, katakana, romaji }) => {
  const [displayHiragana, setDisplayHiragana] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("#374151");

  const handleClick = () => {
    setDisplayHiragana(!displayHiragana);
    setBackgroundColor(backgroundColor === "#374151" ? "white" : "#374151");
  };

  return (
    <div
      className={`character-card p-4 shadow-lg shadow-gray-700 border border-gray-300 cursor-pointer rounded-md hover:animate-rotate-y animate-once hover:animate-duration-[2000ms]`}
      onClick={handleClick}
      style={{ backgroundColor }}
    >
      <div
        className={`text-6xl text-center font-bold ${
          displayHiragana ? "text-amber-50" : "text-gray-700"
        }`}
      >
        {displayHiragana ? hiragana : katakana}
      </div>
      <div className="text-lg mt-2 font-semibold text-red-500 text-center">
        {romaji}
      </div>
    </div>
  );
};

export default CharacterCard;
