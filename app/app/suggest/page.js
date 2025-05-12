'use client';

import Image from 'next/image';
import styles from './suggest.module.css';
import HelloHeader from '../components/suggest/HelloHeader';
import Statusbar from '../components/global-components/statusbar/Statusbar';
import wardrobeGif from '@/public/images/suggest-wardrobe-icon.gif';
import RoundedButton from '../components/global-components/rounded-button/RoundedButton';
import Navbar from '../components/global-components/bottom-navbar/navbar';

export default function SuggestionPage() {
    return (
        <div>
            <Statusbar />
            <HelloHeader />
            <Image
                src={wardrobeGif}
                alt='wardrobe gif'
                className={styles.wardrobeGif}
            />
            <RoundedButton
                text='Get Outfit Suggestions'
                href=''
                type='primary'
                className={styles.roundedButton}
            />
            <Navbar />
        </div>
    );
}
