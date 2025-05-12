"use client";

import styles from "./OutlinedButton.module.css";

export default function OutlinedButton({
    label,
    isSelected = false,
    showDot = false,
    dotColor = "#000000",
    onClick,
}) {
    return (
        <button
            className={`${styles.button} ${isSelected ? styles.selected : ""}`}
            onClick={onClick}
        >
            {showDot && <span className={styles.dot} style={{ backgroundColor: dotColor }}></span>}
            {label}
        </button>
    );
}
