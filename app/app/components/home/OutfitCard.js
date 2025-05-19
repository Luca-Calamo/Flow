"use client";
export default function OutfitCard({ image, onClick, className = "" }) {
  return (
    <div
      className={`bg-[#E6EFEE] rounded-2xl shadow-md w-40 h-40 flex items-center justify-center cursor-pointer transition-transform hover:scale-105 ${className}`}
      onClick={onClick}
    >
      <img
        src={image}
        alt="outfit"
        className="object-contain w-40 h-40"
        draggable={false}
      />
    </div>
  );
} 