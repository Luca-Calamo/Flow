"use client";
import { useState } from "react";
import OutfitCard from "./OutfitCard";
import WideCard from "./wideCard"; 

const todaysCards = [
  "/images/todaysCard1.png",
  "/images/todaysCard2.png",
  "/images/todaysCard3.png",
  "/images/todaysCard4.png",
  "/images/todaysCard5.png",
  "/images/todaysCard6.png",
];

const outfitImages = [
  "/images/outfit01.png",
  "/images/outfit02.png",
  "/images/outfit03.png",
  "/images/outfit04.png",
  "/images/outfit05.png",
];

export default function OutfitCarousel({ direction, onCardClick }) {
  if (direction === "vertical") {
    return (
      <div className="overflow-y-auto snap-y snap-mandatory h-56 flex flex-col items-center">
        {todaysCards.map((img, idx) => (
          <div key={idx} className="snap-center w-full flex justify-center py-2">
            <WideCard image={img} onClick={() => onCardClick(img)} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto snap-x snap-mandatory flex gap-6 py-2 h-[190px]">
      {outfitImages.map((img, idx) => (
        <div key={idx} className="snap-center flex-shrink-0">
          <OutfitCard image={img} onClick={() => onCardClick(img)} />
        </div>
      ))}
    </div>
  );
} 