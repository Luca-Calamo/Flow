"use client";

import styles from "@/app/components/camera/navigation/css/topCamBar.module.css";

export default function TopCamBar({ active, setActive }) {
    return (
        <div className={styles.bar}>
            <div
                className={`${styles.button} ${
                    active === "tops" && styles["buttonActive"]
                }`}
                onClick={() => setActive("tops")}
            >
                <h2 className={styles.buttonText}>Tops</h2>
            </div>
            <div
                className={`${styles.button} ${
                    active === "bottoms" && styles["buttonActive"]
                }`}
                onClick={() => setActive("bottoms")}
            >
                <h2 className={styles.buttonText}>Bottoms</h2>
            </div>
            <div
                className={`${styles.button} ${
                    active === "shoes" && styles["buttonActive"]
                }`}
                onClick={() => setActive("shoes")}
            >
                <h2 className={styles.buttonText}>Shoes</h2>
            </div>
            <div
                className={`${styles.button} ${
                    active === "hats" && styles["buttonActive"]
                }`}
                onClick={() => setActive("hats")}
            >
                <h2 className={styles.buttonText}>Hats</h2>
            </div>
        </div>
    );
}
