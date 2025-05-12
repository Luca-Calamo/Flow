"use client";

import Image from "next/image";
import statusIcons from "@/public/images/statusbar-icons.svg";
import styles from "./Statusbar.module.css";
import backButton from "@/public/images/back-suggest.svg";

export default function Statusbar({ titleBar = false, title = "" }) {
    return (
        <div className={styles.container}>
            <div className={styles.statusBar}>
                <h1 className={styles.time}>9:30</h1>
                <Image src={statusIcons} alt="status icon" className={styles.statusIcons} />
            </div>
            {titleBar && (
                <div className={styles.titleBar}>
                    <Image src={backButton} alt="back" className={styles.backButton} />
                    <h2 className={styles.title}>{title}</h2>
                </div>
            )}
        </div>
    );
}
