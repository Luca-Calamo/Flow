"use client";
import styles from "@/app/components/camera/navigation/css/OutlineOverlay.module.css";
import Image from "next/image";

export default function OutlineOverlay({ overlay }) {
    return (
        <div className={styles.box}>
            <Image
                src={
                    overlay === "tops"
                        ? "/images/tops-outline.svg"
                        : overlay === "bottoms"
                        ? "/images/bottoms-outline.svg"
                        : overlay === "shoes"
                        ? "/images/shoes-outline.svg"
                        : "/images/hats-outline.svg"
                }
                alt={"camera outline"}
                className={styles.image}
                width={24}
                height={24}
            />
        </div>
    );
}
