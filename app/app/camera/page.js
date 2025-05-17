"use client";

import { useState, useEffect } from "react";
import photoData from "@/data/db.json";
import { useRouter } from "next/navigation";
import TopBar from "@/app/components/global-components/topBar/topBar";
import TopCamBar from "@/app/components/camera/navigation/topCamBar";
import CircleButton from "@/app/components/buttons/circleButton";
import OutlineOverlay from "@/app/components/camera/navigation/OutlineOverlay";
import styles from "@/app/camera/camera.module.css";
import Webcam from "react-webcam";

export default function Home() {
    const router = useRouter();
    const [activeOverlay, setActiveOverlay] = useState("tops");
    const [photoIndex, setPhotoIndex] = useState(0);

    const overlays = ["tops", "bottoms", "shoes", "hats"];

    const WebcamComponent = () => <Webcam />;

    useEffect(() => {
        const storedIndex = parseInt(
            localStorage.getItem("photoIndex") || "0",
            10
        );
        setPhotoIndex(storedIndex);
    }, []);

    function overlayOption(direction) {
        const currentIndex = overlays.indexOf(activeOverlay);
        if (direction === "right") {
            if (currentIndex === overlays.length - 1) {
                setActiveOverlay(overlays[0]);
                return;
            }
            setActiveOverlay(overlays[currentIndex + 1]);
        } else if (direction === "left") {
            if (currentIndex === 0) {
                setActiveOverlay(overlays[overlays.length - 1]);
                return;
            }
            setActiveOverlay(overlays[currentIndex - 1]);
        }
    }

    const handleTakePhoto = () => {
        const currentIndex = photoIndex;
        const nextPhoto = photoData[photoIndex];

        if (photoIndex > 0) {
            router.push("/camera/allPhotosView");
        } else {
            router.push(
                `/camera/photoView?photo=${encodeURIComponent(nextPhoto.src)}`
            );
        }

        const newIndex = currentIndex + 1;

        localStorage.setItem("photoIndex", newIndex.toString());
        setPhotoIndex(newIndex);
    };

    return (
        <div className={styles.page}>
            <TopBar title='Camera' hasIcon={true} />
            <TopCamBar active={activeOverlay} setActive={setActiveOverlay} />
            <div className={styles.webcam}>
                <WebcamComponent />
            </div>
            <OutlineOverlay overlay={activeOverlay} />
            <CircleButton
                onClick={() => overlayOption("right")}
                direction='right'
            />
            <CircleButton
                onClick={() => overlayOption("left")}
                direction='left'
            />
            <div className={styles.bar} onClick={handleTakePhoto}>
                <div className={styles.button}></div>
            </div>
        </div>
    );
}
