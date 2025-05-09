"use client";

import styles from "@/app/components/camera/navigation/css/takePhoto.module.css";

export default function TakePhoto({ onTakePhoto }) {
    return (
        <div className={styles.bar}>
            <div
                className={styles.button}
                onClick={() => {
                    onTakePhoto();
                }}
            ></div>
        </div>
    );
}
