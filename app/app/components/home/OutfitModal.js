"use client";
import RoundedButton from "../global-components/rounded-button/RoundedButton";
import { useRouter } from "next/navigation";
import ClothingItemCard from "../ClothingItemCard/ClothingItemCard";

export default function OutfitModal({ outfit, onClose }) {
  const router = useRouter();

  const handleSave = () => {
    // Here you could add logic to save the outfit, then navigate
    router.push("/wardrobe");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl p-6 w-80 flex flex-col items-center relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl font-bold text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
        <h3 className="text-2xl font-roboto font-regular text-black mb-4">
           Suggested Fit
       </h3>
        <div className="flex flex-wrap justify-center items-center mb-4">
          <ClothingItemCard src="/images/Black-Polo.png" />
          <ClothingItemCard src="/images/Black-Hat.png" />
          <ClothingItemCard src="/images/Black-Dress-Pants.png" />
          <ClothingItemCard src="/images/Black-Dress-Shoes.png" />
        </div>
        <RoundedButton
          text="Save to Wardrobe"
          href="#"
          className="w-full"
          onClick={handleSave}
        />
      </div>
    </div>
  );
} 