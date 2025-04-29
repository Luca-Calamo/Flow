// app/components/PhotoView.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FolderSelection from "./FolderSelection";
import "../css/styles.css";

export default function PhotoView({ capturedImage, onRetakePhoto }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showFolderSelection, setShowFolderSelection] = useState(false);
    const router = useRouter();

    const fullDescription =
        "It's a basic crew neck style with short sleeves and appears to be made from a standard cotton or cotton-blend fabric. The t-shirt has no visible graphics, text, patterns, or design elements. It's a classic unisex style that would serve as a versatile basic item in a wardrobe.";

    // Show only first sentence if not expanded
    const shortDescription = fullDescription.split(".")[0] + "...";

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const handleSaveToFolder = (selectedFolders) => {
        console.log("Saving to folders:", selectedFolders);
        // Here you would implement the actual saving logic
    };

    return (
        <>
            <div className='header'>
                <div className='flex items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='30'
                        height='30'
                        viewBox='0 0 30 30'
                        fill='none'
                        onClick={onRetakePhoto}
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
                    <div className='text-lg font-medium'>Photo View</div>
                </div>
                <button
                    className='bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm font-medium'
                    onClick={onRetakePhoto}
                >
                    Re-take photo
                </button>
            </div>

            <div className='photo-display'>
                <div className='photo-container'>
                    <img
                        src='/images/noBg_shirt.png' // Use the public folder path
                        alt='Shirt'
                        className='max-h-full max-w-full object-contain'
                    />
                </div>

                {/* Description section */}
                <div className='mt-4'>
                    <div className='font-semibold text-xl text-gray-900 flex justify-between items-center'>
                        <span>Description</span>
                    </div>

                    <div className='flex items-start mt-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='19'
                            height='17'
                            viewBox='0 0 19 17'
                            fill='none'
                        >
                            <path
                                d='M10.0693 0.212623C10.6013 -0.263931 11.4472 0.112693 11.4472 0.825875V16.1737C11.4472 16.8873 10.6013 17.2639 10.0693 16.7874L6.19565 13.3153C5.78424 12.9463 5.25081 12.7422 4.69784 12.7421H2.47826C1.82099 12.7421 1.19063 12.4814 0.725866 12.0173C0.261102 11.5532 0 10.9237 0 10.2674V6.73214C0 5.36516 1.10932 4.25745 2.47826 4.25745H4.69784C5.25081 4.25735 5.78424 4.05321 6.19565 3.68426L10.0693 0.212623ZM10.2671 1.61872L6.98397 4.56195C6.35589 5.12474 5.54172 5.43598 4.69784 5.43587H2.47826C2.13397 5.43587 1.80379 5.57244 1.56034 5.81554C1.31689 6.05863 1.18012 6.38834 1.18012 6.73214V10.2674C1.18012 10.6112 1.31689 10.9409 1.56034 11.184C1.80379 11.4271 2.13397 11.5637 2.47826 11.5637H4.69784C5.54178 11.5637 6.35596 11.8751 6.98397 12.4381L10.2671 15.3818V1.61872ZM15.3832 1.14452C15.4901 1.03057 15.638 0.963686 15.7943 0.95856C15.9506 0.953433 16.1026 1.01049 16.2168 1.11718L16.222 1.12189L16.231 1.13038C16.2735 1.17104 16.3147 1.21301 16.3546 1.25624C16.4349 1.34108 16.5453 1.46411 16.6766 1.62532C17.0352 2.06839 17.3537 2.54241 17.6282 3.04178C18.3169 4.28526 19 6.12077 19 8.49977C19 10.8788 18.3169 12.7138 17.6282 13.9582C17.3536 14.4574 17.0352 14.9313 16.6766 15.3742C16.5443 15.5362 16.4049 15.6922 16.2588 15.8418L16.2305 15.8692L16.2192 15.8805L16.2177 15.8814L16.3216 15.7782C16.3721 15.7278 16.3891 15.7103 16.2168 15.8819C16.1018 15.9831 15.9519 16.0356 15.7988 16.0283C15.6457 16.021 15.5014 15.9546 15.3965 15.843C15.2916 15.7314 15.2343 15.5834 15.2368 15.4304C15.2392 15.2773 15.3012 15.1313 15.4096 15.0231L15.4115 15.0212C15.4404 14.9931 15.4686 14.9644 15.496 14.9349C15.5578 14.8689 15.6499 14.7676 15.7617 14.6299C16.0757 14.2412 16.3546 13.8256 16.5954 13.3879C17.2053 12.2868 17.8199 10.6459 17.8199 8.49977C17.8199 6.35363 17.2053 4.71279 16.5954 3.61167C16.3547 3.1738 16.0757 2.758 15.7617 2.36914C15.6557 2.23885 15.5438 2.11334 15.4266 1.99299L15.4091 1.97555C15.2955 1.86859 15.2289 1.72101 15.2241 1.56515C15.2192 1.4093 15.2764 1.25834 15.3832 1.14452ZM13.4931 3.97462C13.5458 3.91791 13.6092 3.87212 13.6797 3.83988C13.7502 3.80765 13.8263 3.78959 13.9038 3.78674C13.9812 3.7839 14.0585 3.79632 14.1311 3.8233C14.2038 3.85028 14.2704 3.89129 14.3272 3.94398L14.331 3.94776L14.3376 3.95341L14.3574 3.97274C14.3734 3.98845 14.395 4.01029 14.4221 4.03826C14.4754 4.09388 14.549 4.17354 14.6354 4.2763C14.8082 4.48182 15.0353 4.78161 15.2614 5.1686C15.8541 6.17903 16.1669 7.32875 16.1677 8.49977C16.1677 9.92472 15.7131 11.0574 15.2614 11.8314C15.0348 12.2179 14.8082 12.5182 14.6354 12.7237C14.5471 12.8289 14.4541 12.9302 14.3569 13.0273L14.3479 13.0362L14.3376 13.0461L14.331 13.0523L14.3286 13.0546L14.3277 13.056H14.3267C14.2118 13.1599 14.0606 13.2144 13.9058 13.2079C13.751 13.2014 13.6049 13.1343 13.4992 13.0211C13.3935 12.9079 13.3366 12.7578 13.3409 12.6031C13.3451 12.4484 13.4101 12.3016 13.5219 12.1944L13.5304 12.1859L13.5705 12.1453C13.6073 12.1072 13.663 12.0468 13.731 11.9658C13.8679 11.8027 14.0543 11.5575 14.2413 11.2375C14.729 10.4073 14.9866 9.46232 14.9876 8.49977C14.9876 7.33219 14.6161 6.40265 14.2417 5.76253C14.0548 5.442 13.8688 5.19689 13.7319 5.03426C13.6678 4.95827 13.6007 4.88484 13.5308 4.81413L13.5228 4.80612C13.4084 4.69972 13.3415 4.55283 13.3358 4.39685C13.3302 4.24087 13.3867 4.08901 13.4931 3.97462ZM16.222 1.12189L16.2168 1.11718L16.2177 1.11812L16.2192 1.11907L16.222 1.12189Z'
                                fill='#066051'
                            />
                        </svg>
                        <div className='text-base font-medium text-[#066051]'>
                            Listen
                        </div>
                    </div>

                    <div className='description-section'>
                        <p className='description-text'>
                            {isExpanded ? fullDescription : shortDescription}
                        </p>

                        <button
                            onClick={toggleDescription}
                            className='toggle-button'
                        >
                            {isExpanded ? "See less" : "See more"}{" "}
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='30'
                                height='30'
                                viewBox='0 0 30 30'
                                fill='none'
                            >
                                <path
                                    d={
                                        isExpanded
                                            ? "M7.50006 18.7501L15.0001 11.2501L22.5001 18.7501"
                                            : "M22.4999 11.2499L14.9999 18.7499L7.49994 11.2499"
                                    }
                                    stroke='#066051'
                                    strokeWidth='2.4979'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </button>
                    </div>

                    <button
                        className='button-primary mt-6 w-full'
                        onClick={() => setShowFolderSelection(true)}
                    >
                        Choose Folder
                    </button>
                </div>
            </div>

            {/* Folder Selection Overlay */}
            {showFolderSelection && (
                <FolderSelection
                    onClose={() => setShowFolderSelection(false)}
                    onSave={handleSaveToFolder}
                />
            )}
        </>
    );
}
