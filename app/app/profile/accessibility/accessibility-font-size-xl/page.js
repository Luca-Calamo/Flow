"use client";

import styles from "./accessibility-font-size-xl.module.css";
import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import Navbar from "@/app/components/global-components/bottom-navbar/navbar";
import Link from "next/link";
import { useState } from "react";

export default function accessibilityPage() {
    const [contrast, setContrast] = useState(false);
    const [dark, setDark] = useState(false);
    const [tts, setTts] = useState(false);
    const [colorblind, setColorblind] = useState(false);
    const [patterns, setPatterns] = useState(false);
    const [labels, setLabels] = useState(false);

    return (
        <div className={styles.ourterContainer}>
            <Statusbar
                titleBar={true}
                title="Accessibility Settings"
                showbackButton={true}
                backLink="/profile"
                showExitButton={false}
            />

            <div className={styles.contentContainer}>
                <div className={styles.sectionTitle}>General Settings</div>
                <div className={styles.settingsContainer}>
                    <Link
                        href="/profile/accessibility/accessibility-font-size"
                        className={styles.settingRow}
                    >
                        <span>Font Size</span>
                        <span className={styles.optionText}>Extra Large</span>
                        <span className={styles.arrow}>›</span>
                    </Link>
                    <div className={styles.settingRow}>
                        <span>Contrast Mode</span>
                        <button
                            className={`${styles.switch} ${contrast ? styles.on : ""}`}
                            onClick={() => setContrast((v) => !v)}
                            type="button"
                        >
                            <span className={styles.switchCircle}></span>
                        </button>
                    </div>
                    <div className={styles.settingRow}>
                        <span>Dark Mode</span>
                        <button
                            className={`${styles.switch} ${dark ? styles.on : ""}`}
                            onClick={() => setDark((v) => !v)}
                            type="button"
                        >
                            <span className={styles.switchCircle}></span>
                        </button>
                    </div>
                    <div className={styles.settingRow}>
                        <span>Text-to-Speech</span>
                        <button
                            className={`${styles.switch} ${tts ? styles.on : ""}`}
                            onClick={() => setTts((v) => !v)}
                            type="button"
                        >
                            <span className={styles.switchCircle}></span>
                        </button>
                    </div>
                </div>

                <div className={styles.sectionTitle}>Colorblind Support</div>
                <div className={styles.settingsContainer}>
                    <div className={styles.settingRow}>
                        <span>Enable Colorblind Mode</span>
                        <button
                            className={styles.radioBtn}
                            onClick={() => setColorblind((v) => !v)}
                            type="button"
                        >
                            {colorblind && <span className={styles.radioDot}></span>}
                        </button>
                    </div>
                    <div className={styles.settingRow}>
                        <span>Add patterns / shapes</span>
                        <button
                            className={`${styles.switch} ${patterns ? styles.on : ""}`}
                            onClick={() => setPatterns((v) => !v)}
                            type="button"
                        >
                            <span className={styles.switchCircle}></span>
                        </button>
                    </div>
                    <div className={styles.settingRow}>
                        <span>Show labels always</span>
                        <button
                            className={`${styles.switch} ${labels ? styles.on : ""}`}
                            onClick={() => setLabels((v) => !v)}
                            type="button"
                        >
                            <span className={styles.switchCircle}></span>
                        </button>
                    </div>
                </div>
            </div>

            <Navbar />
        </div>
    );
}
