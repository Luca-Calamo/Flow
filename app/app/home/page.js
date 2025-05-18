'use client';
import React, { useState } from 'react';
import Statusbar from "../components/global-components/statusbar/Statusbar";
import TopBar from "../components/global-components/topBar/topBar";
import Navbar from "../components/global-components/bottom-navbar/navbar";
import OutfitCarousel from "../components/home/OutfitCarousel";
import OutfitModal from "../components/home/OutfitModal";

export default function HomePage() {
  const [modalOutfit, setModalOutfit] = useState(null);

  return (
    <div className="h-screen flex flex-col bg-[#E0E8FF]">
      <Statusbar />
      <TopBar title="Fits" />

      {/* Today’s Suggestions */}
      <section className="flex-1 flex flex-col">
        <div className="bg-[#A3C3B6] px-4 py-2">
          <h2 className="text-base font-medium text-black">Today’s Suggestions</h2>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <OutfitCarousel direction="vertical" onCardClick={setModalOutfit} />
        </div>
      </section>

      {/* All Time Favourites */}
      <section className="flex-1 flex flex-col">
        <div className="bg-[#A3C3B6] px-4 py-2">
          <h2 className="text-base font-medium text-black">Your all time favourites</h2>
        </div>
        <OutfitCarousel direction="horizontal" onCardClick={setModalOutfit} />
      </section>

      {/* Forgotten Fits */}
      <section className="flex-1 flex flex-col">
        <div className="bg-[#A3C3B6] px-4 py-2">
          <h2 className="text-base font-medium text-black">Forgotten fits</h2>
        </div>
        <OutfitCarousel direction="horizontal" onCardClick={setModalOutfit} />
      </section>

      <Navbar />

      {modalOutfit && (
        <OutfitModal outfit={modalOutfit} onClose={() => setModalOutfit(null)} />
      )}
    </div>
  );
}
