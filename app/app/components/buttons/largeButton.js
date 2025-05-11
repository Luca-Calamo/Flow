"use client";

import styles from "@/app/components/buttons/css/largeButton.module.css";

export default function LargeButton({ text, type, onClick }) {
    return (
        <div
            className={`${styles.button} ${
                type === "primary" ? styles.primary : styles.secondary
            }`}
            onClick={onClick}
        >
            <p className={styles.text}>{text}</p>
        </div>
    );
}
