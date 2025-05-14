"use client";

import { useState } from "react";
import Link from "next/link";
import Top_Bar from "@/app/components/global-components/topBar/topBar";
import TopCamBar from "@/app/components/camera/navigation/topCamBar";
import CircleButton from "@/app/components/buttons/circleButton";
import OutlineOverlay from "@/app/components/camera/navigation/OutlineOverlay";
import styles from "@/app/camera/camera.module.css";
import Webcam from "react-webcam";

export default function Home() {
    const [activeOverlay, setActiveOverlay] = useState("tops");

    const overlays = ["tops", "bottoms", "shoes", "hats"];

    const WebcamComponent = () => <Webcam />;

    function nextOverlay() {
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
        <div className={styles.page}>
            <Top_Bar title='Camera' hasIcon={true} />
            <TopCamBar active={activeOverlay} setActive={setActiveOverlay} />
            <div className={styles.webcam}>
                <WebcamComponent />
            </div>
            <OutlineOverlay overlay={activeOverlay} />
            <CircleButton onClick={nextOverlay} direction='right' />
            <CircleButton onClick={prevOverlay} direction='left' />
            <Link href='/camera/photoView' className={styles.bar}>
                <div className={styles.button}></div>
            </Link>
        </div>
    );
}
