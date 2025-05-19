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

      {/* Main content area between TopBar and Navbar */}
      <div className="flex-1 flex flex-col overflow-hidden pb-24">

        {/* Today's Suggestions */}
        <section className="flex flex-col h-[40vh]">
        <div className="bg-[#B2CEC9] border-[1.5px] border-[#8CB6AF] h-[40px] px-4 flex items-center">
            <h2 className="font-roboto text-[28px] text-black">Today’s Suggestions</h2>
          </div>
          {/* Carousel container takes remaining height in this section and scrolls vertically */}
          <div className="flex-1 overflow-y-auto py-2">
            <OutfitCarousel direction="vertical" onCardClick={setModalOutfit} />
          </div>
        </section>

        {/* All Time Favourites */}
        <section className="flex flex-col h-[30vh] mt-2">
        <div className="bg-[#B2CEC9] border-[1.5px] border-[#8CB6AF] h-[30px] px-4 flex items-center">
            <h2 className="font-roboto text-[20px] text-black">Your all time favourites</h2>
          </div>
          {/* Carousel takes available height and scrolls horizontally */}
          <div className="h-full overflow-x-auto px-4 py-2">
            <OutfitCarousel direction="horizontal" onCardClick={setModalOutfit} />
          </div>
        </section>

        {/* Forgotten Fits */}
        <section className="flex flex-col h-[30vh] mt-2">
          <div className="bg-[#B2CEC9] border-[1.5px] border-[#8CB6AF] h-[30px] px-4 flex items-center">
            <h2 className="font-roboto text-[20px] text-black">Forgotten fits</h2>
          </div>
          {/* Carousel takes available height and scrolls horizontally */}
          <div className="h-full overflow-x-auto px-4 py-2">
            <OutfitCarousel direction="horizontal" onCardClick={setModalOutfit} />
          </div>
        </section>

      </div> {/* End of main content area */}

      <Navbar />

      {modalOutfit && (
        <OutfitModal outfit={modalOutfit} onClose={() => setModalOutfit(null)} />
      )}
    </div>
  );
}
