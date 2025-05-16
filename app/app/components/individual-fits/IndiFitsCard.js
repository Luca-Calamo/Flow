import styles from '@/app/components/individual-fits/css/styles.module.css';
import CircleButton from '@/app/components/buttons/circleButton';

export default function IndividualFits({ src }) {
    return (
        <div>
            <div className={styles.card}>
                <img className={styles.img} src={src}></img>
                {/* <img className={styles.shirtImg} src={src}></img>
                <img className={styles.pantsImg} src={src}></img>
                <img className={styles.shoesImg} src={src}></img> */}
            </div>
        </div>
    );
}
