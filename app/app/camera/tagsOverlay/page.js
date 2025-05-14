"use client";

import { createPortal } from "react-dom";
import styles from "@/app/camera/tagsOverlay/tagsOverlay.module.css";
import SmallButton from "@/app/components/buttons/smallButton";
import LargeButton from "@/app/components/buttons/largeButton";
import TagButton from "@/app/components/buttons/tagButton";
import Image from "next/image";

export default function TagsOverlay({ onClose }) {
    const handleCloseClick = (e) => {
        e.preventDefault();
        if (onClose) {
            onClose();
        }
    };

    const modalContent = (
        <div className={styles.overlay}>
            <div className={styles.wrapper}>
                <div className={styles.modal}>
                    <header className={styles.header}>
                        <div
                            className={styles.button}
                            onClick={handleCloseClick}
                        >
                            <Image
                                src={"/images/closeOverlay.svg"}
                                alt={"back arrow"}
                                className={styles.image}
                                width={30}
                                height={30}
                            />
                        </div>
                    </header>
                    <div className={styles.content}>
                        <div className={styles.section}>
                            <h3>Type</h3>
                            <div className={styles.buttonContainer}>
                                <TagButton
                                    type={"secondary"}
                                    text={"T-shirt"}
                                />
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                            </div>
                        </div>
                        <div className={styles.section}>
                            <h3>Weather</h3>
                            <div className={styles.buttonContainer}>
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                            </div>
                        </div>
                        <div className={styles.section}>
                            <h3>Season</h3>
                            <div className={styles.buttonContainer}>
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                            </div>
                        </div>
                        <div className={styles.section}>
                            <h3>Color</h3>
                            <div className={styles.buttonContainer}>
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                                <TagButton type='secondary' text={"T-shirt"} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <LargeButton
                            text={"Save Tags"}
                            type={"primary"}
                            onClick={handleCloseClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}
