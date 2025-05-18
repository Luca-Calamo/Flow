import Carousel from '@/app/components/carousel/carousel';
import Navbar from '@/app/components/global-components/bottom-navbar/navbar';
import TopBar from '@/app/components/global-components/topBar/topBar';
import styles from '@/app/build-a-fit/css/styles.module.css';
export default function BuildAFit() {
    return (
        <div className={styles.body}>
            <TopBar title='Build a Fit' hasIcon={true} initialActive='right' />
            <Carousel />
            <Navbar />
        </div>
    );
}
