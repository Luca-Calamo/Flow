"use client";

import HelloHeader from "@/app/components/suggest/HelloHeader";
import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import NextOrBackButton from "@/app/components/suggest/NextOrBackButton/NextOrBackButton";
import { useState } from "react";
import OutlinedButton from "@/app/components/suggest/OutlinedButton/OutlinedButton";
import styles from "./preference.module.css";

const colorOptions = [
    { label: "Red", color: "#DD0000" },
    { label: "Orange", color: "#FF8C00" },
    { label: "Brown", color: "#B68244" },
    { label: "Yellow", color: "#F4D509" },
    { label: "Green", color: "#00CF07" },
    { label: "Blue", color: "#04C4F4" },
    { label: "Violet", color: "#AD62F9" },
    { label: "Pink", color: "#ED68C9" },
    { label: "Gray", color: "#959595" },
    { label: "Black", color: "#000000" },
    { label: "White", color: "#FFFFFF" },
];

const comfortOptions = [
    { label: "Regular" },
    { label: "Lightweight" },
    { label: "Tight" },
    { label: "Loose" },
    { label: "Breathable" },
    { label: "Soft" },
];

export default function SuggestionPreferPage() {
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedComfort, setSelectedComfort] = useState([]);

    const toggleSelection = (label, setSelected) => {
        setSelected((prev) =>
            prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
        );
    };

    return (
        <div>
            <Statusbar titleBar={true} title="Get My Look" exitLink="/suggest" />
            <HelloHeader />

            <div className={styles.section}>
                <h2 className={styles.title}>Color Preference</h2>
                <div className={styles.buttonContainer}>
                    {colorOptions.map(({ label, color }) => (
                        <OutlinedButton
                            key={label}
                            label={label}
                            isSelected={selectedColors.includes(label)}
                            showDot={true}
                            dotColor={color}
                            onClick={() => toggleSelection(label, setSelectedColors)}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.title}>Comfort Level</h2>
                <div className={styles.buttonContainer}>
                    {comfortOptions.map(({ label }) => (
                        <OutlinedButton
                            key={label}
                            label={label}
                            isSelected={selectedComfort.includes(label)}
                            onClick={() => toggleSelection(label, setSelectedComfort)}
                        />
                    ))}
                </div>
            </div>

            <NextOrBackButton
                showBack={true}
                showSkip={true}
                back="/suggest/plan"
                next="/suggest/loading"
            />
        </div>
    );
}
