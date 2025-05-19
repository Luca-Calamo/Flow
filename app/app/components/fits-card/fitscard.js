import articles from '@/data/articles/articles'; // adjust path if needed
import styles from '@/app/components/fits-card/css/styles.module.css';

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

export default function FitsCard({ shirtId, hatId, pantsId, shoesId }) {
    return (
        <div className={styles.card}>
            <div className={styles.clothingItem}>
                <ArticleImage id={shirtId} type='shirts' />
            </div>
            <div className={styles.clothingItem}>
                <ArticleImage id={hatId} type='hats' />
            </div>
            <div className={styles.clothingItem}>
                <ArticleImage id={pantsId} type='pants' />
            </div>
            <div className={styles.clothingItem}>
                <ArticleImage id={shoesId} type='shoes' />
            </div>
        </div>
    );
}

// import articles from '@/data/articles/articles'; // adjust path if needed
// import styles from '@/app/components/fits-card/css/styles.module.css';
// import Link from 'next/link';

// function ArticleImage({ id, type }) {
//     const article = articles.find((item) => item.id === id);

//     if (!article) {
//         return <p>Item not found</p>;
//     }

//     return (
//         <Link href={`/articles/${id}`}>
//             <img
//                 src={article.image}
//                 alt={article.title}
//                 className={styles[type] || ''}
//             />
//         </Link>
//     );
// }

// export default function FitsCard({ shirtId, hatId, pantsId, shoesId }) {
//     return (
//         <div className={styles.card}>
//             <div className={styles.clothingItem}>
//                 <ArticleImage id={shirtId} type='shirts' />
//             </div>
//             <div className={styles.clothingItem}>
//                 <ArticleImage id={hatId} type='hats' />
//             </div>
//             <div className={styles.clothingItem}>
//                 <ArticleImage id={pantsId} type='pants' />
//             </div>
//             <div className={styles.clothingItem}>
//                 <ArticleImage id={shoesId} type='shoes' />
//             </div>
//         </div>
//     );
// }
