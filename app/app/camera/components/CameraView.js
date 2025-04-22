// app/components/CameraView.js
"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { startCamera, stopCamera, capturePhoto } from "../utils/cameraUtils";

export default function CameraView({ onPhotoCapture }) {
    const [category, setCategory] = useState("Top");
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isClient, setIsClient] = useState(false); // Track if running on the client

    const categories = ["Top", "Bottoms", "Shoes", "Hat"];

    useEffect(() => {
        setIsClient(true); // Mark as client-side
    }, []);

    useEffect(() => {
        if (!isClient) return; // Ensure this runs only on the client

        let stream = null;

        const initCamera = async () => {
            stream = await startCamera(videoRef);
        };

        initCamera();

        // Clean up function
        return () => {
            stopCamera(videoRef);
        };
    }, [isClient]);

    const takePhoto = () => {
        if (!isClient) return; // Ensure this runs only on the client
        const imageData = capturePhoto(videoRef, canvasRef);
        if (imageData && onPhotoCapture) {
            onPhotoCapture(imageData);
        }
    };

    const switchCategory = (direction) => {
        const currentIndex = categories.indexOf(category);
        let newIndex;

        if (direction === "next") {
            newIndex = (currentIndex + 1) % categories.length;
        } else {
            newIndex =
                (currentIndex - 1 + categories.length) % categories.length;
        }

        setCategory(categories[newIndex]);
    };

    return (
        <>
            {/* Hidden canvas for capturing photos */}
            <canvas ref={canvasRef} className='hidden' />

            {/* Green header with navigation */}
            <div className='bg-green-800 text-white p-4'>
                <div className='flex items-center'>
                    <ChevronLeft className='mr-4' />
                    <div className='flex space-x-4'>
                        {categories.map((cat) => (
                            <div
                                key={cat}
                                className={`pb-2 ${
                                    category === cat
                                        ? "border-b-2 border-white font-bold"
                                        : ""
                                }`}
                                onClick={() => setCategory(cat)}
                            >
                                {cat}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Camera viewport */}
            <div className='relative flex-1 bg-gray-200'>
                {/* Video element for camera feed */}
                {isClient && (
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className='absolute inset-0 w-full h-full object-cover'
                    />
                )}

                {/* Positioning guide overlay */}
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='border-4 border-dashed border-white rounded-xl w-4/5 h-4/5'></div>
                </div>

                {/* Navigation arrows */}
                <button
                    className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-700 text-white p-2 rounded-full'
                    onClick={() => switchCategory("prev")}
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-700 text-white p-2 rounded-full'
                    onClick={() => switchCategory("next")}
                >
                    <ChevronRight size={24} />
                </button>

                {/* Simple camera button */}
                <button
                    className='absolute bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-gray-300'
                    onClick={takePhoto}
                />
            </div>
        </>
    );
}
