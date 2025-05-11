"use client";

import { useState } from "react";
import Link from "next/link";
import Top_Bar from "@/app/components/global-components/top_bar/top_bar";
import Camera from "@/app/components/camera/webcam";
import TopCamBar from "@/app/components/camera/navigation/topCamBar";
import CircleButton from "@/app/components/buttons/circleButton";
import OutlineOverlay from "../components/camera/navigation/OutlineOverlay";
import styles from "@/app/camera/camera.module.css";

export default function Home() {
    const [activeOverlay, setActiveOverlay] = useState("tops");

    const overlays = ["tops", "bottoms", "shoes", "hats"];

    function nxtOverlay() {
        const currentIndex = overlays.indexOf(activeOverlay);
        if (currentIndex === overlays.length - 1) {
            setActiveOverlay(overlays[0]);
            return;
        }
        setActiveOverlay(overlays[currentIndex + 1]);
    }

    function prevOverlay() {
        const currentIndex = overlays.indexOf(activeOverlay);
        if (currentIndex === 0) {
            setActiveOverlay(overlays[overlays.length - 1]);
            return;
        }
        setActiveOverlay(overlays[currentIndex - 1]);
    }

    const handleTakePhoto = () => {
        alert("Take Photo");
    };

    return (
        <div className='flex flex-col items-center min-h-screen bg-white'>
            <Top_Bar title='Camera' hasIcon={true} />
            <TopCamBar active={activeOverlay} setActive={setActiveOverlay} />
            <Camera />
            <OutlineOverlay overlay={activeOverlay} />
            <CircleButton onClick={nxtOverlay} direction='right' />
            <CircleButton onClick={prevOverlay} direction='left' />
            <Link href='/camera/photoView' className={styles.bar}>
                <div className={styles.button}></div>
            </Link>
        </div>
    );
}
