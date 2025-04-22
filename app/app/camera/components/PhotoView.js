// app/components/PhotoView.js
"use client";

import { useState } from "react";
import { ChevronLeft, Volume2, ChevronDown, ChevronUp } from "lucide-react";

export default function PhotoView({ capturedImage, onRetakePhoto }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const fullDescription =
        "It's a basic crew neck style with short sleeves and appears to be made from a standard cotton or cotton-blend fabric. The t-shirt has no visible graphics, text, patterns, or design elements. It's a classic unisex style that would serve as a versatile basic item in a wardrobe.";

    // Show only first sentence if not expanded
    const shortDescription = fullDescription.split(".")[0] + "...";

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            {/* Green header with title and retake button */}
            <div className='bg-green-800 text-white p-4 flex justify-between items-center'>
                <div className='flex items-center'>
                    <ChevronLeft className='mr-4' />
                    <div className='text-lg font-medium'>Photo View</div>
                </div>
                <button
                    className='bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm font-medium'
                    onClick={onRetakePhoto}
                >
                    Re-take photo
                </button>
            </div>

            {/* Photo display */}
            <div className='flex-1 bg-gray-100 p-4 flex flex-col'>
                <div className='bg-white flex-1 flex items-center justify-center p-4 rounded-md shadow-sm'>
                    {capturedImage && (
                        <img
                            src={capturedImage}
                            alt='Captured item'
                            className='max-h-full max-w-full object-contain'
                        />
                    )}
                </div>

                {/* Item details */}
                <div className='mt-2 text-center'>
                    <div className='flex items-center justify-center'>
                        <span className='text-base font-medium text-gray-800'>
                            Color: #161515
                        </span>
                        <div className='w-5 h-5 bg-black ml-2 rounded-sm border border-gray-300'></div>
                    </div>
                </div>

                {/* Description section */}
                <div className='mt-4'>
                    <div className='font-semibold text-xl text-gray-900 flex justify-between items-center'>
                        <span>Description</span>
                        <button
                            onClick={toggleDescription}
                            className='text-green-700 p-1 rounded-full hover:bg-green-50'
                        >
                            {isExpanded ? (
                                <ChevronUp size={20} />
                            ) : (
                                <ChevronDown size={20} />
                            )}
                        </button>
                    </div>

                    <div className='flex items-start mt-1'>
                        <Volume2
                            className='mr-2 mt-1 flex-shrink-0 text-green-700'
                            size={22}
                        />
                        <div className='text-base font-medium text-green-700'>
                            Listen
                        </div>
                    </div>

                    <div className='mt-2 bg-white p-3 rounded-md shadow-sm border border-gray-200'>
                        <p className='text-base leading-relaxed text-gray-800'>
                            {isExpanded ? fullDescription : shortDescription}
                        </p>

                        {!isExpanded && (
                            <button
                                onClick={toggleDescription}
                                className='text-green-700 font-medium text-sm mt-1 flex items-center'
                            >
                                See more{" "}
                                <ChevronDown size={16} className='ml-1' />
                            </button>
                        )}
                    </div>

                    <button className='mt-6 bg-green-800 text-white py-3 px-4 rounded-full w-full font-medium text-lg shadow-md hover:bg-green-700 transition-colors'>
                        Choose Folder
                    </button>
                </div>
            </div>
        </>
    );
}
