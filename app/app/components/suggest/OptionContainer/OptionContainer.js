"use client";

import Image from "next/image";
import styles from "./OptionContainer.module.css";

export default function SelectionGrid({ heading, subheading, items, onItemClick }) {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.subheading}>{subheading}</p>
            <div className={styles.options}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.item} ${item.selected ? styles.selected : ""}`}
                        onClick={() => onItemClick(index)}
                    >
                        <Image src={item.icon} alt={item.label} width={80} height={80} priority />
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
