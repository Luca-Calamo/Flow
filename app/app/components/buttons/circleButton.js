"use client";

import styles from "@/app/components/buttons/css/circleButton.module.css";
import Image from "next/image";

export default function CircleButton({ onClick, direction }) {
    return (
        <div
            className={` ${styles.button} ${
                direction === "right"
                    ? styles["buttonRight"]
                    : direction === "left" && styles["buttonLeft"]
            }`}
            onClick={onClick}
        >
            <Image
                src={"/images/arrow.svg"}
                alt={`${direction} arrow`}
                className={styles.image}
                width={24}
                height={24}
            />
        </div>
    );
}
