// app/components/CameraView.js
"use client";

import { useState, useRef, useEffect } from "react";
import { startCamera, stopCamera, capturePhoto } from "../utils/cameraUtils";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

import "../css/styles.css";

export default function CameraView({ onPhotoCapture }) {
    const [category, setCategory] = useState("Top");
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isClient, setIsClient] = useState(false); // Track if running on the client
    const router = useRouter();

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

    const goBack = () => {
        if (window.history.length > 1) {
            router.back(); // Go to the previous page
        } else {
            router.push("/camera"); // Fallback to the CameraView page
        }
    };

    return (
        <>
            {/* Hidden canvas for capturing photos */}
            <canvas ref={canvasRef} className='hidden' />

            {/* Green header with navigation */}
            <div className='header'>
                <div className='flex items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='30'
                        height='30'
                        viewBox='0 0 30 30'
                        fill='none'
                        onClick={goBack}
                        className='cursor-pointer'
                    >
                        <path
                            d='M18.7501 22.4999L11.2501 14.9999L18.7501 7.49994'
                            stroke='white'
                            strokeWidth='2.4979'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                    <div className='camMenu'>
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
            <div className='camera-viewport'>
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
                    {category === "Top" && (
                        // Render the shirt SVG if "Top" is selected
                        <svg
                            width='400'
                            height='375'
                            viewBox='0 0 292 275'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M197.227 5H105.227L5 85.7561L47.7273 153.431L73.9848 133.226V270H221.394V133.226L251.742 153.431L286.727 85.7561L197.227 5Z'
                                stroke='white'
                                strokeWidth='10'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeDasharray='10 20'
                            />
                        </svg>
                    )}
                    {category === "Bottoms" && (
                        // Render the pants SVG if "Bottoms" is selected
                        <svg
                            width='300'
                            height='500'
                            viewBox='0 0 174 314'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M169 5H5L11.5 309H60.5L85 122L104.5 309H157.5L169 5Z'
                                stroke='white'
                                strokeWidth='10'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeDasharray='10 20'
                            />
                        </svg>
                    )}
                    {category === "Shoes" && (
                        // Render the shoes SVG if "Shoes" is selected
                        <svg
                            width='300'
                            height='200'
                            viewBox='0 0 263 145'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M81 31.5H5.5V124.5C65.4794 135.586 135.602 148.378 195.5 129.5C195.5 111 180.316 76.3805 133 74C127.881 63.0994 75.9446 43.2449 81 31.5Z'
                                stroke='white'
                                strokeWidth='10'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeDasharray='10 20'
                            />
                            <path
                                d='M143.5 5H68V98C127.979 109.086 198.102 121.878 258 103C258 84.5 242.816 49.8805 195.5 47.5C190.381 36.5994 138.445 16.7449 143.5 5Z'
                                stroke='white'
                                strokeWidth='10'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeDasharray='10 20'
                            />
                        </svg>
                    )}
                    {category === "Hat" && (
                        // Render the hat SVG if "Hat" is selected
                        <svg
                            width='250'
                            height='250'
                            viewBox='0 0 235 246'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M5 241V5.5H230V241H5Z'
                                stroke='white'
                                strokeWidth='10'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeDasharray='10 20'
                            />
                        </svg>
                    )}
                    {!["Top", "Bottoms", "Shoes", "Hat"].includes(category) && (
                        // Render the default dotted line box for other categories
                        <div
                            className='border-4 border-dashed border-white rounded-xl'
                            style={{ width: "80%", height: "80%" }}
                        ></div>
                    )}
                </div>

                {/* Navigation arrows */}
                <button
                    className='nav-arrow nav-arrow-left'
                    onClick={() => switchCategory("prev")}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                    >
                        <path
                            d='M22 12H2M2 12L11 3M2 12L11 21'
                            stroke='white'
                            strokeWidth='2'
                        />
                    </svg>
                </button>

                <button
                    className='nav-arrow nav-arrow-right'
                    onClick={() => switchCategory("next")}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                    >
                        <path
                            d='M2 12H22M22 12L13 3M22 12L13 21'
                            stroke='white'
                            strokeWidth='2'
                        />
                    </svg>
                </button>

                {/* Simple camera button */}
                <div className='absolute bottom-0 left-0 w-full bg-black flex items-center justify-center py-8'>
                    <button className='camera-button' onClick={takePhoto} />
                </div>
            </div>
        </>
    );
}
