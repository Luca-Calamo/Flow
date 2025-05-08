import styles from '@/components/buttons/circleButton.module.css';

export default function CircleButton() {
    return (
        <div className={styles.circleBtn}>
            <img className={styles.circleBtnImg}></img>
        </div>
    );
}
