"use client";

import { useState } from "react";
import styles from "@/app/components/camera/photoView/css/description.module.css";
import Image from "next/image";

export default function Description({ shortText, longText }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.component}>
            <div className={styles.header}>
                <h2 className={styles.title}>Description</h2>

                <Image
                    src={"/images/down-arrow.svg"}
                    width={30}
                    height={30}
                    alt='description arrow'
                    onClick={() => setIsOpen(!isOpen)}
                    className={`${styles.arrow} ${isOpen && styles.arrowUp}`}
                />
            </div>
            <hr className={styles.line} />
            <p className={styles.text}>{isOpen ? longText : shortText}</p>
        </div>
    );
}
