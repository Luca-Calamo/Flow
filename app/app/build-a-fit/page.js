'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BuildCard from '@/app/components/build-card/build-card';
import styles from '@/app/build-a-fit/css/styles.module.css';
import Navbar from '@/app/components/global-components/bottom-navbar/navbar';
import Top_Bar from '@/app/components/global-components/topBar/topBar';
import SmallButton from '@/app/components/buttons/smallButton';
import Link from 'next/link';

export default function BuildAFit() {
    const router = useRouter();

    const [hatId, setHatId] = useState(14);
    const [shirtId, setShirtId] = useState(1);
    const [pantsId, setPantsId] = useState(7);
    const [shoesId, setShoesId] = useState(10);

    const handleSave = () => {
        const newFit = {
            hatId,
            shirtId,
            pantsId,
            shoesId,
        };

        const savedFits = JSON.parse(localStorage.getItem('savedFits') || '[]');
        savedFits.push(newFit);
        localStorage.setItem('savedFits', JSON.stringify(savedFits));

        router.push('/fits');
    };

    return (
        <div className={styles.body}>
            <Top_Bar title='Build a Fit' hasIcon={false} />
            <div className={styles.btncontainer}>
                <Link href='/fits'>
                    <div className={styles.txtBtn}>
                        <img
                            className={styles.bckBtn}
                            src='/images/arrow-black.svg'
                            alt='Back'
                        />
                        <p className={styles.text}>Back to Wardrobe</p>
                    </div>
                </Link>
                <SmallButton text='Save' onClick={handleSave} />
            </div>

            <div className={styles.container}>
                <BuildCard
                    type='hats'
                    idRange={[14, 17]}
                    selectedId={hatId}
                    setSelectedId={setHatId}
                />
            </div>
            <div className={styles.container}>
                <BuildCard
                    type='shirts'
                    idRange={[1, 5]}
                    selectedId={shirtId}
                    setSelectedId={setShirtId}
                />
            </div>
            <div className={styles.container}>
                <BuildCard
                    type='pants'
                    idRange={[6, 9]}
                    selectedId={pantsId}
                    setSelectedId={setPantsId}
                />
            </div>
            <div className={styles.container}>
                <BuildCard
                    type='shoes'
                    idRange={[10, 13]}
                    selectedId={shoesId}
                    setSelectedId={setShoesId}
                />
            </div>

            <Navbar />
        </div>
    );
}
