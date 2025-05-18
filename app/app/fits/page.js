import WardrobeCard from '@/app/components/wardrobeHome-comp/warHomeCard';
import Navbar from '@/app/components/global-components/bottom-navbar/navbar';
import Top_Bar from '@/app/components/global-components/topBar/topBar';
import styles from '@/app/fits/css/styles.module.css';
import SmallButton from '@/app/components/buttons/smallButton';
import BuildCard from '@/app/components/build-card/build-card';
import Link from 'next/link';
import FitsCard from '@/app/components/fits-card/fitscard';

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
                    <Link href='/individual-fits2'>
                        <FitsCard
                            shirtId={1}
                            hatId={15}
                            pantsId={8}
                            shoesId={12}
                        />
                    </Link>
                    <Link href='/individual-fits'>
                        <FitsCard
                            shirtId={4}
                            hatId={16}
                            pantsId={8}
                            shoesId={13}
                        />
                    </Link>
                    <Link href='/individual-fits4'>
                        <FitsCard
                            shirtId={5}
                            hatId={14}
                            pantsId={9}
                            shoesId={11}
                        />
                    </Link>
                    <Link href='/individual-fits5'>
                        <FitsCard
                            shirtId={3}
                            hatId={16}
                            pantsId={7}
                            shoesId={18}
                        />
                    </Link>
                    <Link href='/individual-fits3'>
                        <FitsCard
                            shirtId={2}
                            hatId={17}
                            pantsId={6}
                            shoesId={10}
                        />
                    </Link>
                    <BuildCard id={1} type='shirts' />
                </div>
                <Navbar />
            </div>
        </div>
    );
}
