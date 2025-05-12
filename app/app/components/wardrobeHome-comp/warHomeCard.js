import styles from '@/app/components/wardrobeHome-comp/css/styles.module.css';
import Image from 'next/image';
export default function WardrobeCard({ src }) {
    return (
        <div className={styles.warHome}>
            <img className={styles.img} src={src}></img>
        </div>
    );
}
