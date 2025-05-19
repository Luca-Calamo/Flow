// // tags overlay trying to get dynamic filter to work

// 'use client';

// import { createPortal } from 'react-dom';
// import { useState } from 'react';
// import styles from '@/app/camera/tagsOverlay/tagsOverlay.module.css';
// import SmallButton from '@/app/components/buttons/smallButton';
// import LargeButton from '@/app/components/buttons/largeButton';
// import TagButton from '@/app/components/buttons/tagButton';
// import Image from 'next/image';

// export default function TagsOverlay({ onClose, onSave }) {
//     const [selectedTags, setSelectedTags] = useState([]);

//     const toggleTag = (tag) => {
//         setSelectedTags((prev) =>
//             prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
//         );
//     };

//     const handleCloseClick = (e) => {
//         e.preventDefault();
//         if (onClose) {
//             onClose();
//         }
//     };

//     const handleSaveClick = () => {
//         if (onSave) {
//             onSave(selectedTags); // Pass selected tags to parent component
//         }
//     };

//     const renderTag = (tagText) => (
//         <TagButton
//             key={tagText}
//             type={selectedTags.includes(tagText) ? 'primary' : 'secondary'}
//             text={tagText}
//             onClick={() => toggleTag(tagText)}
//         />
//     );

//     const modalContent = (
//         <div className={styles.overlay}>
//             <div className={styles.wrapper}>
//                 <div className={styles.modal}>
//                     <header className={styles.header}>
//                         <div
//                             className={styles.button}
//                             onClick={handleCloseClick}
//                         >
//                             <Image
//                                 src='/images/closeOverlay.svg'
//                                 alt='close'
//                                 className={styles.image}
//                                 width={30}
//                                 height={30}
//                             />
//                         </div>
//                     </header>

//                     <div className={styles.content}>
//                         <div className={styles.section}>
//                             <h3>Type</h3>
//                             <div className={styles.buttonContainer}>
//                                 {[
//                                     'T-shirt',
//                                     'Jacket',
//                                     'Pants',
//                                     'Hat',
//                                     'Shorts',
//                                     'Polo',
//                                     'Shoes',
//                                     'Sweatpants',
//                                 ].map(renderTag)}
//                             </div>
//                         </div>
//                         <div className={styles.section}>
//                             <h3>Weather</h3>
//                             <div className={styles.buttonContainer}>
//                                 {['Warm', 'Hot', 'Cold', 'Rainy'].map(
//                                     renderTag
//                                 )}
//                             </div>
//                         </div>
//                         <div className={styles.section}>
//                             <h3>Season</h3>
//                             <div className={styles.buttonContainer}>
//                                 {['Summer', 'Fall', 'Winter', 'Spring'].map(
//                                     renderTag
//                                 )}
//                             </div>
//                         </div>
//                         <div className={styles.section}>
//                             <h3>Color</h3>
//                             <div className={styles.buttonContainer}>
//                                 {[
//                                     'Red',
//                                     'Green',
//                                     'Blue',
//                                     'Yellow',
//                                     'Black',
//                                     'White',
//                                     'Grey',
//                                     'Brown',
//                                 ].map(renderTag)}
//                             </div>
//                         </div>
//                     </div>

//                     <div className={styles.footer}>
//                         <LargeButton
//                             text='Save Tags'
//                             type='primary'
//                             onClick={handleSaveClick}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );

//     return createPortal(modalContent, document.body);
// }

// orignal tags overlay that dosent dynamically filter

'use client';

import { createPortal } from 'react-dom';
import styles from '@/app/camera/tagsOverlay/tagsOverlay.module.css';
import SmallButton from '@/app/components/buttons/smallButton';
import LargeButton from '@/app/components/buttons/largeButton';
import TagButton from '@/app/components/buttons/tagButton';
import Image from 'next/image';

export default function TagsOverlay({ onClose }) {
    const handleCloseClick = (e) => {
        e.preventDefault();
        if (onClose) {
            onClose();
        }
    };

    const modalContent = (
        <div className={styles.overlay}>
            <div className={styles.wrapper}>
                <div className={styles.modal}>
                    <header className={styles.header}>
                        <div
                            className={styles.button}
                            onClick={handleCloseClick}
                        >
                            <Image
                                src={'/images/closeOverlay.svg'}
                                alt={'back arrow'}
                                className={styles.image}
                                width={30}
                                height={30}
                            />
                        </div>
                    </header>
                    <div className={styles.content}>
                        <div className={styles.section}>
                            <h3>Type</h3>
                            <div className={styles.buttonContainer}>
                                <TagButton
                                    type={'secondary'}
                                    text={'T-shirt'}
                                />
                                <TagButton type='secondary' text={'Jacket'} />
                                <TagButton type='secondary' text={'Pants'} />
                                <TagButton type='secondary' text={'Hat'} />
                                <TagButton type='secondary' text={'Shorts'} />
                                <TagButton type='secondary' text={'Polo'} />
                                <TagButton
                                    type='secondary'
                                    text={'Button up'}
                                />
                                <TagButton
                                    type='secondary'
                                    text={'Sweatpants'}
                                />
                            </div>
                        </div>
                        <div className={styles.section}>
                            <h3>Weather</h3>
                            <div className={styles.buttonContainer}>
                                <TagButton type='secondary' text={'Warm'} />
                                <TagButton type='secondary' text={'Hot'} />
                                <TagButton type='secondary' text={'Cold'} />
                                <TagButton type='secondary' text={'Rainy'} />
                            </div>
                        </div>
                        <div className={styles.section}>
                            <h3>Season</h3>
                            <div className={styles.buttonContainer}>
                                <TagButton type='secondary' text={'Summer'} />
                                <TagButton type='secondary' text={'Fall'} />
                                <TagButton type='secondary' text={'Winter'} />
                                <TagButton type='secondary' text={'Spring'} />
                            </div>
                        </div>
                        <div className={styles.section}>
                            <h3>Color</h3>
                            <div className={styles.buttonContainer}>
                                <TagButton type='secondary' text={'Red'} />
                                <TagButton type='secondary' text={'Green'} />
                                <TagButton type='secondary' text={'Blue'} />
                                <TagButton type='secondary' text={'Yellow'} />
                                <TagButton type='secondary' text={'Black'} />
                                <TagButton type='secondary' text={'White'} />
                                <TagButton type='secondary' text={'Grey '} />
                                <TagButton type='secondary' text={'Brown'} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <LargeButton
                            text={'Save Tags'}
                            type={'primary'}
                            onClick={handleCloseClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}
