import Link from 'next/link';
import articles from '@/data/articles'; // <-- no /[id]

import styles from '@/app/components/fits-card/css/styles.module.css';

export default function FitsCard({ shirtId, hatId, pantsId, shoesId }) {
    // helper to get article by ID
    const getArticle = (id) => articles.find((article) => article.id === id);

    const shirt = getArticle(shirtId);
    const hat = getArticle(hatId);
    const pants = getArticle(pantsId);
    const shoes = getArticle(shoesId);

    return (
        <div className={styles.card}>
            <div className={styles.clothingItem}>
                <Link href={`/articles/${shirt.id}`}>
                    <img src={shirt.image} alt={shirt.title} />
                </Link>
            </div>
            <div className={styles.clothingItem}>
                <Link href={`/articles/${hat.id}`}>
                    <img src={hat.image} alt={hat.title} />
                </Link>
            </div>
            <div className={styles.clothingItem}>
                <Link href={`/articles/${pants.id}`}>
                    <img src={pants.image} alt={pants.title} />
                </Link>
            </div>
            <div className={styles.clothingItem}>
                <Link href={`/articles/${shoes.id}`}>
                    <img src={shoes.image} alt={shoes.title} />
                </Link>
            </div>
        </div>
    );
}

// import styles from '@/app/components/fits-card/css/styles.module.css';

// export default function FitsCard({ shirts, hats, pants, shoes }) {
//     return (
//         <div className={styles.card}>
//             <div className={styles.clothingItem}>
//                 <img className={styles.shirts} src={shirts} alt='Shirt' />
//             </div>
//             <div className={styles.clothingItem}>
//                 <img className={styles.hats} src={hats} alt='Hat' />
//             </div>
//             <div className={styles.clothingItem}>
//                 <img className={styles.pants} src={pants} alt='Pants' />
//             </div>
//             <div className={styles.clothingItem}>
//                 <img className={styles.shoes} src={shoes} alt='Shoes' />
//             </div>
//         </div>
//     );
// }
