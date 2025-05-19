'use client';
import { useState } from 'react';

import articles from '@/data/articles/articles';
import styles from './css/styles.module.css';
import modalStyles from './css/modal.module.css';

function ArticleImage({ id, type }) {
    const article = articles.find((item) => item.id === id);

    if (!article) {
        return <p>Item not found</p>;
    }

    return (
        <img
            src={article.image}
            alt={article.title}
            className={styles[type] || ''}
        />
    );
}

export default function BuildCard({
    idRange,
    type,
    selectedId,
    setSelectedId,
}) {
    const [isModalOpen, setModalOpen] = useState(false);

    const filteredArticles = idRange
        ? articles.filter(
              (article) => article.id >= idRange[0] && article.id <= idRange[1]
          )
        : articles.filter((article) => article.type === type);

    return (
        <>
            <div className={styles.card} onClick={() => setModalOpen(true)}>
                <div className={styles.clothingItem}>
                    <ArticleImage id={selectedId} type={type} />
                </div>
            </div>

            {isModalOpen && (
                <div
                    className={modalStyles.overlay}
                    onClick={() => setModalOpen(false)}
                >
                    <div
                        className={modalStyles.modalGrid}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={modalStyles.grid}>
                            {filteredArticles.map((article) => (
                                <img
                                    key={article.id}
                                    src={article.image}
                                    alt={article.title}
                                    className={modalStyles.optionImage}
                                    onClick={() => {
                                        setSelectedId(article.id);
                                        setModalOpen(false);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

// Working copy

// 'use client';

// import { useState } from 'react';
// import articles from '@/data/articles/articles';
// import styles from './css/styles.module.css';
// import modalStyles from './css/modal.module.css';

// function ArticleImage({ id, type }) {
//     const article = articles.find((item) => item.id === id);

//     if (!article) {
//         return <p>Item not found</p>;
//     }

//     return (
//         <img
//             src={article.image}
//             alt={article.title}
//             className={styles[type] || ''}
//         />
//     );
// }

// export default function BuildCard({ id: defaultId, type, idRange }) {
//     const [isModalOpen, setModalOpen] = useState(false);
//     const [selectedId, setSelectedId] = useState(defaultId);

//     const filteredArticles = idRange
//         ? articles.filter(
//               (article) => article.id >= idRange[0] && article.id <= idRange[1]
//           )
//         : articles.filter((article) => article.type === type);

//     return (
//         <>
//             <div className={styles.card} onClick={() => setModalOpen(true)}>
//                 <div className={styles.clothingItem}>
//                     <ArticleImage id={selectedId} type={type} />
//                 </div>
//             </div>

//             {isModalOpen && (
//                 <div
//                     className={modalStyles.overlay}
//                     onClick={() => setModalOpen(false)}
//                 >
//                     <div
//                         className={modalStyles.modalGrid}
//                         onClick={(e) => e.stopPropagation()} // Prevent closing on internal click
//                     >
//                         <div className={modalStyles.grid}>
//                             {filteredArticles.map((article) => (
//                                 <img
//                                     key={article.id}
//                                     src={article.image}
//                                     alt={article.title}
//                                     className={modalStyles.optionImage}
//                                     onClick={() => {
//                                         setSelectedId(article.id);
//                                         setModalOpen(false);
//                                     }}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }
