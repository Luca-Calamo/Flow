import styles from '@/app/components/articles/css/styles.module.css';

export default function ArticleCard({ src }) {
    return (
        <div>
            <div className={styles.card}>
                <img className={styles.img} src={src}></img>
            </div>
        </div>
    );
}
