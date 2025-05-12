"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./NextOrBackButton.module.css";

export default function NextOrBackButton({
    back = "#",
    next = "#",
    showBack = true,
    showSkip = true,
}) {
    return (
        <div className={styles.container}>
            {showBack && (
                <Link href={back} className={styles.back}>
                    <Image src="/images/arrow-black.svg" alt="Back" width={24} height={24} />
                </Link>
            )}

            {showSkip && (
                <Link href={next} className={styles.skip}>
                    Skip this step
                </Link>
            )}

            <Link href={next} className={styles.next}>
                <Image src="/images/arrow.svg" alt="Next" width={24} height={24} />
            </Link>
        </div>
    );
}
