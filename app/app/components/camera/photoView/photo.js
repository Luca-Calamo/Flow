"use client";

import styles from "@/app/components/camera/photoView/css/photo.module.css";
import Image from "next/image";
import LargeButton from "../../buttons/largeButton";
import SmallButton from "../../buttons/smallButton";

export default function Photo({ onClick, src, buttonText = "Add Tags" }) {
    return (
        <div className={styles.container}>
            <Image
                src={src}
                alt={"shirt photo"}
                className={styles.image}
                width={500}
                height={500}
            />
            <div className={styles.buttonContainer}>
                <LargeButton
                    text={buttonText}
                    type={"primary"}
                    onClick={onClick}
                />
            </div>
        </div>
    );
}
