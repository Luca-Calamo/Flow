"use client";

import styles from "./accessibility-font-size.module.css";
import externalStyles from "../accessibility.module.css";
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
        <div className={externalStyles.ourterContainer}>
            <Statusbar
                titleBar={true}
                title="Accessibility Settings"
                showbackButton={true}
                backLink="/profile"
                showExitButton={false}
            />

            <div className={externalStyles.contentContainer}>
                <div className={externalStyles.sectionTitle}>General Settings</div>
                <div className={externalStyles.settingsContainer}>
                    <Link
                        href="/profile/accessibility/accessibility-font-size"
                        className={externalStyles.settingRow}
                    >
                        <span>Font Size</span>
                        <span className={externalStyles.optionText}>Medium</span>
                        <span className={externalStyles.arrow}>›</span>
                    </Link>
                    <div className={externalStyles.settingRow}>
                        <span>Contrast Mode</span>
                        <button
                            className={`${externalStyles.switch} ${
                                contrast ? externalStyles.on : ""
                            }`}
                            onClick={() => setContrast((v) => !v)}
                            type="button"
                        >
                            <span className={externalStyles.switchCircle}></span>
                        </button>
                    </div>
                    <div className={externalStyles.settingRow}>
                        <span>Dark Mode</span>
                        <button
                            className={`${externalStyles.switch} ${dark ? externalStyles.on : ""}`}
                            onClick={() => setDark((v) => !v)}
                            type="button"
                        >
                            <span className={externalStyles.switchCircle}></span>
                        </button>
                    </div>
                    <div className={externalStyles.settingRow}>
                        <span>Text-to-Speech</span>
                        <button
                            className={`${externalStyles.switch} ${tts ? externalStyles.on : ""}`}
                            onClick={() => setTts((v) => !v)}
                            type="button"
                        >
                            <span className={externalStyles.switchCircle}></span>
                        </button>
                    </div>
                </div>

                <div className={externalStyles.sectionTitle}>Colorblind Support</div>
                <div className={externalStyles.settingsContainer}>
                    <div className={externalStyles.settingRow}>
                        <span>Enable Colorblind Mode</span>
                        <button
                            className={externalStyles.radioBtn}
                            onClick={() => setColorblind((v) => !v)}
                            type="button"
                        >
                            {colorblind && <span className={externalStyles.radioDot}></span>}
                        </button>
                    </div>
                    <div className={externalStyles.settingRow}>
                        <span>Add patterns / shapes</span>
                        <button
                            className={`${externalStyles.switch} ${
                                patterns ? externalStyles.on : ""
                            }`}
                            onClick={() => setPatterns((v) => !v)}
                            type="button"
                        >
                            <span className={externalStyles.switchCircle}></span>
                        </button>
                    </div>
                    <div className={externalStyles.settingRow}>
                        <span>Show labels always</span>
                        <button
                            className={`${externalStyles.switch} ${
                                labels ? externalStyles.on : ""
                            }`}
                            onClick={() => setLabels((v) => !v)}
                            type="button"
                        >
                            <span className={externalStyles.switchCircle}></span>
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.overlay}>
                <div className={styles.dialog}>
                    <Link href="/profile/accessibility" className={styles.closeBtn}>
                        ×
                    </Link>
                    <div className={styles.title}>Font Size</div>
                    <div className={styles.settingsContainer}>
                        <Link
                            href="/profile/accessibility/accessibility-font-size-s"
                            className={styles.settingRow}
                        >
                            <span className={styles.small}>Small</span>
                        </Link>
                        <Link href="/profile/accessibility" className={styles.settingRow}>
                            <span className={styles.medium}>Medium</span>
                        </Link>
                        <Link
                            href="/profile/accessibility/accessibility-font-size-l"
                            className={styles.settingRow}
                        >
                            <span className={styles.large}>Large</span>
                        </Link>
                        <Link
                            href="/profile/accessibility/accessibility-font-size-xl"
                            className={styles.settingRow}
                        >
                            <span className={styles.xlarge}>Extra Large</span>
                        </Link>
                    </div>
                </div>
            </div>

            <Navbar />
        </div>
    );
}
