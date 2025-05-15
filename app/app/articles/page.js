import ArticleCard from '@/app/components/articles/articleCard';
import Navbar from '@/app/components/global-components/bottom-navbar/navbar';
import Top_Bar from '@/app/components/global-components/top_bar/top_bar';
import styles from '@/app/articles/css/styles.module.css';
export default function Articles() {
    return (
        <div className={styles.body}>
            <Top_Bar title='Articles' hasBar={true} hasIcon={true} />
            <div className={styles.container}>
                <ArticleCard src='/images/Black-Dress-Shoes.png' />
                <ArticleCard src='/images/Black-Dress-Pants.png' />
                <ArticleCard src='/images/Black-Polo.png' />
                <ArticleCard src='/images/Black-Tee.png' />
                <ArticleCard src='/images/Blue-Baseball-Cap.png' />
                <ArticleCard src='/images/Blue-Polo.png' />
                <ArticleCard src='/images/Cargo-Jeans.png' />
                <ArticleCard src='/images/Chelsea-Boots.png' />
                <ArticleCard src='/images/Green-Beanie.png' />
                <ArticleCard src='/images/Grey-Tee.png' />
                <ArticleCard src='/images/Leather-Running-Shoes.png' />
                <ArticleCard src='/images/Ripped-Jeans.png' />
                <ArticleCard src='/images/Sweatpants.png' />
                <ArticleCard src='/images/Timbs.png' />
                <ArticleCard src='/images/White-Longsleeve.png' />
                <ArticleCard src='/images/Yellow-Bucket-Hat.png' />
            </div>
            <Navbar />
        </div>
    );
}
