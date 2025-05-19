// trying to incoporate tags filtering

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ArticleCard from '@/app/components/articles/articleCard'; // Your ArticleCard component
import Navbar from '@/app/components/global-components/bottom-navbar/navbar';
import TopBar from '@/app/components/global-components/topBar/topBar';
import SmallButton from '@/app/components/buttons/smallButton';
import TagsOverlay from '@/app/camera/tagsOverlay/page'; // Your existing TagsOverlay component
import styles from '@/app/articles/css/styles.module.css';

export default function Articles() {
    const router = useRouter();
    const [articles, setArticles] = useState([]);
    const [showOverlay, setShowOverlay] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);

    // Fetch articles from your data source (or /carousel.json)
    useEffect(() => {
        fetch('/carousel.json')
            .then((res) => res.json())
            .then(setArticles)
            .catch((err) => {
                console.error('Error fetching articles:', err);
            });
    }, []);

    // Handle article card click (navigate to single article)
    const handleCardClick = (article) => {
        router.push(
            `/articles/singleArticle?article=${encodeURIComponent(article)}`
        );
    };

    // Filter articles based on selected tags
    const filterArticlesByTags = (articles) => {
        if (selectedTags.length === 0) return articles; // No filters applied, return all articles
        return articles.filter(
            (article) => selectedTags.every((tag) => article.tags.includes(tag)) // Filter based on tags
        );
    };

    // Extract all tags from articles to show in overlay
    const getAllTagsFromArticles = (articlesList) => {
        const tagSet = new Set();
        articlesList.forEach((article) => {
            article.tags?.forEach((tag) => {
                if (tag && tag.trim() !== '') {
                    tagSet.add(tag);
                }
            });
        });
        return Array.from(tagSet).sort(); // Sort alphabetically
    };

    // Log selectedTags after update
    useEffect(() => {
        console.log('Selected Tags:', selectedTags);
    }, [selectedTags]);

    return (
        <div className={styles.body}>
            <TopBar
                title='Articles'
                hasBar={true}
                hasIcon={true}
                initialActive='right'
            />

            <div className={styles.btncontainer}>
                <div className={styles.button}>
                    <SmallButton text='Build' />
                </div>
                <div className={styles.button}>
                    <SmallButton
                        text='Tags'
                        onClick={() => setShowOverlay(true)}
                    />
                </div>
            </div>

            <div className={styles.container}>
                {/* Apply filtering to articles before displaying */}
                {filterArticlesByTags(articles).map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleCardClick(item.title)} // You can use an ID or title for unique identifier
                        className={styles.articleCardButton}
                    >
                        <ArticleCard src={item.image} />{' '}
                        {/* Pass the article image */}
                    </button>
                ))}
            </div>

            <Navbar />

            {showOverlay && (
                <TagsOverlay
                    availableTags={getAllTagsFromArticles(articles)} // Get available tags from articles
                    selectedTags={selectedTags} // Pass the selected tags to overlay
                    onClose={() => setShowOverlay(false)} // Close the overlay
                    onSave={(tags) => {
                        setSelectedTags(tags); // Update selected tags
                        setShowOverlay(false); // Close the overlay after saving
                    }}
                />
            )}
        </div>
    );
}

//working article without tags filtering
// 'use client';

// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import ArticleCard from '@/app/components/articles/articleCard';
// import Navbar from '@/app/components/global-components/bottom-navbar/navbar';
// import TopBar from '@/app/components/global-components/topBar/topBar';
// import SmallButton from '@/app/components/buttons/smallButton';
// import styles from '@/app/articles/css/styles.module.css';
// import TagsOverlay from '@/app/camera/tagsOverlay/page';

// export default function Articles() {
//     const router = useRouter();
//     const [articles, setArticles] = useState([]);
//     const [showOverlay, setShowOverlay] = useState(false); // State to control the overlay visibility

//     useEffect(() => {
//         fetch('/carousel.json')
//             .then((res) => res.json())
//             .then(setArticles)
//             .catch((err) => {
//                 console.error('Error fetching articles:', err);
//             });
//     }, []);

//     const handleCardClick = (article) => {
//         router.push(
//             `/articles/singleArticle?article=${encodeURIComponent(article)}`
//         );
//     };

//     // Handle opening the Tags overlay
//     const handleTagsButtonClick = () => {
//         setShowOverlay(true); // Set the state to true to show the overlay
//     };

//     return (
//         <div className={styles.body}>
//             <TopBar
//                 title='Articles'
//                 hasBar={true}
//                 hasIcon={true}
//                 initialActive='right'
//             />
//             <div className={styles.btncontainer}>
//                 <div className={styles.button}>
//                     <SmallButton text='Build' />
//                 </div>
//                 <div className={styles.button}>
//                     <SmallButton text='Tags' onClick={handleTagsButtonClick} />{' '}
//                     {/* Open overlay on click */}
//                 </div>
//             </div>
//             <div className={styles.container}>
//                 {articles.map((item, index) => {
//                     console.log('Rendering article:', item);
//                     return (
//                         <button
//                             key={index}
//                             onClick={() => handleCardClick(item.image)}
//                             className={styles.articleCardButton}
//                         >
//                             <ArticleCard src={item.image} />
//                         </button>
//                     );
//                 })}
//             </div>
//             <Navbar />

//             {/* Show the TagsOverlay if showOverlay is true */}
//             {showOverlay && (
//                 <TagsOverlay onClose={() => setShowOverlay(false)} />
//             )}
//         </div>
//     );
// }
