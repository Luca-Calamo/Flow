"use client";

import styles from "./RoundedButton.module.css";
import Link from "next/link";

export default function RoundedButton({
    text = "sample text",
    href = "#",
    className = "",
    type = "primary",
}) {
    const buttonClass = type === "secondary" ? styles.secondaryButton : styles.primaryButton;

    return (
        <Link href={href} className={`${styles.button} ${buttonClass} ${className}`}>
            {text}
        </Link>
    );
}
