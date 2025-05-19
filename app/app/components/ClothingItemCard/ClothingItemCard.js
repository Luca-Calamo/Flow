import Image from 'next/image';
import styles from './css/styles.module.css';

export default function ClothingItemCard({ src }) {
    return (
        <div className={styles.card}>
            <img 
                className={styles.img}
                src={src}
                alt="clothing item"
            />
        </div>
    );
} 