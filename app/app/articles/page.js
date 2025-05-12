import ArticleCard from '@/app/components/articles/articleCard';
import WardrobeCard from '@/app/components/wardrobeHome-comp/warHomeCard';
import styles from '@/app/articles/css/styles.module.css';
export default function Articles() {
    return (
        <div>
            <WardrobeCard />

            <div className='container'>
                <ArticleCard src='/images/Black-Dress-Shoes.png' />
                <ArticleCard src='/images/Black-Dress-Pants.png' />
                <ArticleCard src='' />
                <ArticleCard src='' />
                <ArticleCard src='' />
                <ArticleCard src='' />
                <ArticleCard src='' />
            </div>
        </div>
    );
}
