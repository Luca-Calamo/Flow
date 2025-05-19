"use client";
export default function WideCard({ image, onClick, className = "" }) {
  return (
    <div
      className={`bg-[#E6EFEE] rounded-2xl shadow-lg w-64 h-40 flex items-center justify-center cursor-pointer transition-transform hover:scale-105 ${className}`}
      onClick={onClick}
    >
      <img
        src={image}
        alt="outfit"
        className="object-contain w-72 h-40"
        draggable={false}
      />
    </div>
  );
}
