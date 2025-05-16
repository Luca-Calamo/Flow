import IndividualFits from '@/app/components/individual-fits/IndiFitsCard';
import TopBar from '@/app/components/global-components/topBar/topBar';
import Navbar from '@/app/components/global-components/bottom-navbar/navbar';
import SmallButton from '@/app/components/buttons/smallButton';
import styles from '@/app/individual-fits2/css/styles.module.css';

export default function IndiFits() {
    return (
        <div className={styles.container}>
            <TopBar title='Fits' hasIcon={true} />
            <div className={styles.btncontainer}>
                <div className={styles.button}>
                    <SmallButton text='Edit' />
                </div>
                <div className={styles.txtBtn}>
                    <img
                        className={styles.bckBtn}
                        src='/images/arrow-black.svg'
                    ></img>
                    <p className={styles.text}>Back to Wardrobe</p>
                </div>
            </div>
            <div className={styles.body}>
                <IndividualFits src=' /images/Fit2.png' />
            </div>
            <Navbar />
        </div>
    );
}
