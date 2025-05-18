import Navbar from '@/app/components/global-components/bottom-navbar/navbar';
import TopBar from '@/app/components/global-components/topBar/topBar';
import styles from '@/app/build-a-fit/css/styles.module.css';
import FitBuilder from '@/app/components/build-card/build-card';
import { useState } from 'react';

export default function BuildAFit() {
    return (
        <div className={styles.body}>
            <TopBar title='Build a Fit' hasIcon={true} initialActive='right' />
            <main className='flex flex-col items-center justify-center min-h-screen'>
                <h1 className='text-3xl font-bold mb-6'>Build Your Fit</h1>
                <FitBuilder />
            </main>

            <Navbar />
        </div>
    );
}

// import Carousel from '@/app/components/carousel/carousel';
// import Navbar from '@/app/components/global-components/bottom-navbar/navbar';
// import TopBar from '@/app/components/global-components/topBar/topBar';
// import styles from '@/app/build-a-fit/css/styles.module.css';
// export default function BuildAFit() {
//     return (
//         <div className={styles.body}>
//             <TopBar title='Build a Fit' hasIcon={true} initialActive='right' />
//             <Carousel />
//             <Navbar />
//         </div>
//     );
// }
