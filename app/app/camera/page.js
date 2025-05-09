"use client";

import Top_Bar from "@/app/components/global-components/top_bar/top_bar";
import Camera from "@/app/components/camera/webcam";
import TakePhoto from "@/app/components/camera/navigation/takePhoto";
import TopCamBar from "@/app/components/camera/navigation/topCamBar";
import CircleButton from "@/app/components/buttons/circleButton";

export default function Home() {
    const handleTakePhoto = () => {
        alert("Take Photo");
    };

    return (
        <div className='flex flex-col items-center min-h-screen bg-white'>
            <Top_Bar title='Camera' hasIcon={true} />
            <TopCamBar />
            <Camera />
            <CircleButton onClick={handleTakePhoto} direction='right' />
            <CircleButton onClick={handleTakePhoto} direction='left' />
            <TakePhoto onTakePhoto={handleTakePhoto} />
        </div>
    );
}
