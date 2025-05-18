import BuildCard from '@/app/components/build-card/build-card';
import styles from '@/app/build-a-fit/css/styles.module.css';
import Navbar from '@/app/components/global-components/bottom-navbar/navbar';
import Top_Bar from '@/app/components/global-components/topBar/topBar';
import Link from 'next/link';

export default function BuildAFit() {
    return (
        <div className={styles.body}>
            <Top_Bar title='Build a Fit' hasIcon={true} />
            <div className={styles.btncontainer}>
                <Link href='/fits'>
                    <div className={styles.txtBtn}>
                        <img
                            className={styles.bckBtn}
                            src='/images/arrow-black.svg'
                        ></img>
                        <p className={styles.text}>Back to Wardrobe</p>
                    </div>
                </Link>
            </div>
            <div className={styles.container}>
                <BuildCard id={14} type='hats' idRange={[14, 17]} />
            </div>
            <div className={styles.container}>
                <BuildCard id={1} type='shirts' idRange={[1, 5]} />
            </div>
            <div className={styles.container}>
                <BuildCard id={7} type='pants' idRange={[6, 9]} />
            </div>
            <div className={styles.container}>
                <BuildCard id={10} type='shoes' idRange={[10, 13]} />
            </div>
            <Navbar />
        </div>
    );
}
