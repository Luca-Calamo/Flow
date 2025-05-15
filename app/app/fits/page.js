import WardrobeCard from '@/app/components/wardrobeHome-comp/warHomeCard';
import Navbar from '@/app/components/global-components/bottom-navbar/navbar';
import Top_Bar from '@/app/components/global-components/topBar/topBar';
import styles from '@/app/fits/css/styles.module.css';
import SmallButton from '@/app/components/buttons/smallButton';
import LargeButton from '@/app/components/buttons/largeButton';

export default function WarCard() {
    return (
        <div>
            <div className={styles.body}>
                <Top_Bar title='Fits' hasBar={true} hasIcon={true} />
                <div className={styles.btncontainer}>
                    <div className={styles.button}>
                        <SmallButton text='Build' />
                    </div>
                    <div className={styles.button}>
                        <SmallButton text='Tags' />
                    </div>
                </div>

                <div className={styles.container}>
                    <WardrobeCard src='/images/outfit01.png' />
                    <WardrobeCard src='/images/outfit2.png' />
                    <WardrobeCard src='/images/outfit03.png' />
                    <WardrobeCard src='/images/outfit04.png' />
                    <WardrobeCard src='/images/outfit05.png' />
                </div>
                <Navbar />
            </div>
        </div>
    );
}

// export default function SmallButton() {
//     return (
//         <div className='container'>
//             <SmallButton />
//         </div>
//     );
// }
