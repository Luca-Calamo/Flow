"use client";

import Webcam from "react-webcam";
import styles from "@/app/components/camera/webcam.module.css";

export default function Camera() {
    const WebcamComponent = () => <Webcam />;
    return (
        <div className={styles.webcam}>
            <WebcamComponent />
        </div>
    );
}
