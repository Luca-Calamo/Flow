"use client";

import { useState } from "react";
import styles from "@/app/components/camera/navigation/css/topCamBar.module.css";

export default function TopCamBar() {
    const [activeButton, setActiveButton] = useState("tops");

    return (
        <div className={styles.bar}>
            <div
                className={`${styles.button} ${
                    activeButton === "tops" && styles["buttonActive"]
                }`}
                onClick={() => setActiveButton("tops")}
            >
                <h2 className={styles.buttonText}>Tops</h2>
            </div>
            <div
                className={`${styles.button} ${
                    activeButton === "bottoms" && styles["buttonActive"]
                }`}
                onClick={() => setActiveButton("bottoms")}
            >
                <h2 className={styles.buttonText}>Bottoms</h2>
            </div>
            <div
                className={`${styles.button} ${
                    activeButton === "shoes" && styles["buttonActive"]
                }`}
                onClick={() => setActiveButton("shoes")}
            >
                <h2 className={styles.buttonText}>Shoes</h2>
            </div>
            <div
                className={`${styles.button} ${
                    activeButton === "hats" && styles["buttonActive"]
                }`}
                onClick={() => setActiveButton("hats")}
            >
                <h2 className={styles.buttonText}>Hats</h2>
            </div>
        </div>
    );
}
