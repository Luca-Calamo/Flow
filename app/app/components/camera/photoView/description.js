"use client";

import { useState } from "react";
import styles from "@/app/components/camera/photoView/css/description.module.css";
import Image from "next/image";

export default function Description({}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.component}>
            <div className={styles.header}>
                <div className={styles.listen}>
                    <Image
                        src={"/images/listen-icon.svg"}
                        width={30}
                        height={30}
                        alt={"listen icon"}
                    />
                    <h3>Listen</h3>
                </div>
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
            <p className={styles.text}>
                {!isOpen
                    ? "It's a basic crew neck style with short sleeves and appears to be made from a standard cotton or cotton-blend fabric..."
                    : "It's a basic crew neck style with short sleeves and appears to be made from a standard cotton or cotton-blend fabric. The t-shirt has no visible graphics, text, patterns, or design elements. It's a classic unisex style that would serve as a versatile basic item in a wardrobe."}
            </p>
        </div>
    );
}
