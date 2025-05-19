"use client";

import { useEffect, useState } from "react";
import FitsCard from "@/app/components/fits-card/fitscard";
import styles from "@/app/fits/css/styles.module.css";
import Navbar from "@/app/components/global-components/bottom-navbar/navbar";
import Top_Bar from "@/app/components/global-components/topBar/topBar";
import SmallButton from "@/app/components/buttons/smallButton";
import Link from "next/link";
import TagsOverlay from "@/app/camera/tagsOverlay/page"; // Adjust the import path if necessary

export default function FitsPage() {
    const [savedFits, setSavedFits] = useState([]);
    const [showTagsOverlay, setShowTagsOverlay] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);

    // Load saved fits on mount
    useEffect(() => {
        const storedFits = JSON.parse(localStorage.getItem("savedFits") || "[]");
        setSavedFits(storedFits);
    }, []);

    // Original 5 static fits
    const staticFits = [
        {
            shirtId: 4,
            hatId: 16,
            pantsId: 8,
            shoesId: 13,
            route: "/individual-fits1",
        },
        {
            shirtId: 1,
            hatId: 15,
            pantsId: 8,
            shoesId: 12,
            route: "/individual-fits2",
        },
        {
            shirtId: 2,
            hatId: 17,
            pantsId: 6,
            shoesId: 10,
            route: "/individual-fits3",
        },
        {
            shirtId: 5,
            hatId: 14,
            pantsId: 9,
            shoesId: 11,
            route: "/individual-fits4",
        },
        {
            shirtId: 2,
            hatId: 17,
            pantsId: 7,
            shoesId: 18,
            route: "/individual-fits5",
        },
    ];

    const handleResetFits = () => {
        if (confirm("Are you sure you want to delete your saved fits?")) {
            localStorage.removeItem("savedFits");
            setSavedFits([]);
        }
    };

    return (
        <div className={styles.body}>
            <Top_Bar title="Fits" hasBar={true} hasIcon={false} />
            <div className={styles.btncontainer}>
                <Link href="/build-a-fit">
                    <div className={styles.button}>
                        <SmallButton text="Build" />
                    </div>
                </Link>
                <div className={styles.button}>
                    <SmallButton text="Tags" onClick={() => setShowTagsOverlay(true)} />
                </div>

                <div className={styles.button}>
                    <SmallButton text="Reset" onClick={handleResetFits} />
                </div>
            </div>

            <div className={styles.container}>
                {/* Render static fits */}
                {staticFits.map((fit, index) => (
                    <div key={`static-${index}`} className={styles.fitCardContainer}>
                        <Link href={fit.route}>
                            <FitsCard
                                hatId={fit.hatId}
                                shirtId={fit.shirtId}
                                pantsId={fit.pantsId}
                                shoesId={fit.shoesId}
                            />
                        </Link>
                    </div>
                ))}

                {/* Render saved fits */}
                {savedFits.map((fit, index) => (
                    <div key={`saved-${index}`} className={styles.fitCardContainer}>
                        <Link href="/individual-fits1">
                            <FitsCard
                                hatId={fit.hatId}
                                shirtId={fit.shirtId}
                                pantsId={fit.pantsId}
                                shoesId={fit.shoesId}
                            />
                        </Link>
                    </div>
                ))}
            </div>

            {showTagsOverlay && (
                <TagsOverlay
                    selectedTags={selectedTags}
                    onClose={() => setShowTagsOverlay(false)} // Close the overlay
                    onSave={(tags) => {
                        setSelectedTags(tags); // Update selected tags
                        setShowTagsOverlay(false); // Close the overlay after saving
                    }}
                />
            )}
            <Navbar />
        </div>
    );
}

// trying to incorporate tag filtering

// 'use client';

// import { useEffect, useState } from 'react';
// import FitsCard from '@/app/components/fits-card/fitscard';
// import styles from '@/app/fits/css/styles.module.css';
// import Navbar from '@/app/components/global-components/bottom-navbar/navbar';
// import Top_Bar from '@/app/components/global-components/topBar/topBar';
// import SmallButton from '@/app/components/buttons/smallButton';
// import Link from 'next/link';
// import TagsOverlay from '@/app/camera/tagsOverlay/page';

// export default function FitsPage() {
//     const [savedFits, setSavedFits] = useState([]);
//     const [showOverlay, setShowOverlay] = useState(false);
//     const [selectedTags, setSelectedTags] = useState([]);

//     useEffect(() => {
//         const storedFits = JSON.parse(
//             localStorage.getItem('savedFits') || '[]'
//         );
//         setSavedFits(storedFits);
//     }, []);

//     const staticFits = [
//         {
//             shirtId: 4,
//             hatId: 16,
//             pantsId: 8,
//             shoesId: 13,
//             route: '/individual-fits1',
//             tags: ['Winter', 'Black', 'Pants'],
//         },
//         {
//             shirtId: 1,
//             hatId: 15,
//             pantsId: 8,
//             shoesId: 12,
//             route: '/individual-fits2',
//             tags: ['Summer', 'Blue', 'T-shirt'],
//         },
//         // ...other static fits
//     ];

//     const handleResetFits = () => {
//         if (confirm('Are you sure you want to delete all saved fits?')) {
//             localStorage.removeItem('savedFits');
//             setSavedFits([]);
//         }
//     };

//     const filterFitsByTags = (fits) => {
//         if (selectedTags.length === 0) return fits;

//         return fits.filter((fit) => {
//             const fitTags = fit.tags || [];
//             return selectedTags.every((tag) => fitTags.includes(tag));
//         });
//     };

//     const handleSaveTags = (tags) => {
//         setSelectedTags(tags);
//         setShowOverlay(false);
//     };

//     return (
//         <div className={styles.body}>
//             <Top_Bar title='Fits' hasBar={true} hasIcon={true} />

//             <div className={styles.btncontainer}>
//                 <Link href='/build-a-fit'>
//                     <div className={styles.button}>
//                         <SmallButton text='Build' />
//                     </div>
//                 </Link>
//                 <div className={styles.button}>
//                     <SmallButton
//                         text='Tags'
//                         onClick={() => setShowOverlay(true)}
//                     />
//                 </div>
//                 <div className={styles.button}>
//                     <SmallButton text='Reset' onClick={handleResetFits} />
//                 </div>
//             </div>

//             <div className={styles.container}>
//                 {/* Static fits (with tag filtering) */}
//                 {filterFitsByTags(staticFits).map((fit, index) => (
//                     <div
//                         key={`static-${index}`}
//                         className={styles.fitCardContainer}
//                     >
//                         <Link href={fit.route}>
//                             <FitsCard
//                                 hatId={fit.hatId}
//                                 shirtId={fit.shirtId}
//                                 pantsId={fit.pantsId}
//                                 shoesId={fit.shoesId}
//                             />
//                         </Link>
//                     </div>
//                 ))}

//                 {/* Saved fits (tag filtering and static link) */}
//                 {filterFitsByTags(
//                     savedFits.map((fit) => ({
//                         ...fit,
//                         tags: fit.tags || [], // Future proofing for saved tag support
//                     }))
//                 ).map((fit, index) => (
//                     <div
//                         key={`saved-${index}`}
//                         className={styles.fitCardContainer}
//                     >
//                         <Link href='/individual-fit-generated'>
//                             <FitsCard
//                                 hatId={fit.hatId}
//                                 shirtId={fit.shirtId}
//                                 pantsId={fit.pantsId}
//                                 shoesId={fit.shoesId}
//                             />
//                         </Link>
//                     </div>
//                 ))}
//             </div>

//             <Navbar />

//             {showOverlay && (
//                 <TagsOverlay
//                     onClose={() => setShowOverlay(false)}
//                     onSave={handleSaveTags}
//                 />
//             )}
//         </div>
//     );
// }

//working fits page without tag filtering
