"use client";

import Image from "next/image";
import weatherIcon from "@/public/images/suggest-weather-icon.gif";
import styles from "./HelloHeader.module.css";

export default function HelloHeader() {
    return (
        <div className={styles.container}>
            <h1 className={styles.greeting}>Hi, Ethan</h1>
            <Image src={weatherIcon} alt="weather icon" className={styles.weatherIcon} />
        </div>
    );
}
