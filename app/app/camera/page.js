// app/page.js - Main page component
'use client';

import { useState } from 'react';
import CameraView from './components/CameraView';
import PhotoView from './components/PhotoView';

export default function Home() {
    const [screen, setScreen] = useState('camera'); // 'camera' or 'photoView'
    const [capturedImage, setCapturedImage] = useState(null);

    const handlePhotoCapture = (imageData) => {
        setCapturedImage(imageData);
        setScreen('photoView');
    };

    const handleRetakePhoto = () => {
        setCapturedImage(null);
        setScreen('camera');
    };

    return (
        <main className='flex flex-col h-screen bg-white'>
            {screen === 'camera' ? (
                <CameraView onPhotoCapture={handlePhotoCapture} />
            ) : (
                <PhotoView
                    capturedImage={capturedImage}
                    onRetakePhoto={handleRetakePhoto}
                />
            )}
        </main>
    );
}
