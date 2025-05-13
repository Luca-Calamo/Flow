"use client";

import Image from "next/image";
import statusIcons from "@/public/images/statusbar-icons.svg";
import styles from "./Statusbar.module.css";
import exitButton from "@/public/images/exit-suggest.svg";
import Link from "next/link";

export default function Statusbar({
    titleBar = false,
    title = "",
    exitLink = "#",
    showExitButton = true,
}) {
    return (
        <div className={styles.container}>
            <div className={styles.statusBar}>
                <h1 className={styles.time}>9:30</h1>
                <Image src={statusIcons} alt="status icon" className={styles.statusIcons} />
            </div>
            {titleBar && (
                <div className={styles.titleBar}>
                    {showExitButton && (
                        <Link href={exitLink}>
                            <Image src={exitButton} alt="exit" className={styles.exitButton} />
                        </Link>
                    )}
                    <h2 className={styles.title}>{title}</h2>
                </div>
            )}
        </div>
    );
}
