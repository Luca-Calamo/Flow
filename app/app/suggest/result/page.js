"use client";

import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import Image from "next/image";
import styles from "./result.module.css";
import outfit01 from "@/public/images/suggest-outfit01.png";
import outfit02 from "@/public/images/suggest-outfit02.png";
import outfit03 from "@/public/images/suggest-outfit03.png";
import outfit04 from "@/public/images/suggest-outfit04.png";
import outfit05 from "@/public/images/suggest-outfit05.png";
import outfit06 from "@/public/images/suggest-outfit06.png";
import { useState } from "react";
import saveOutline from "@/public/images/save-outline.svg";
import saveFilled from "@/public/images/save-filled.svg";
import RoundedButton from "@/app/components/global-components/rounded-button/RoundedButton";
import { v4 as uuidv4 } from "uuid";
import { useMemo } from "react";

export default function SuggestionResultPage() {
    const [savedOutfits, setSavedOutfits] = useState([]);
    const [showSnackbar, setShowSnackbar] = useState(false);

    const toggleSave = (index) => {
        setSavedOutfits((prev) => {
            const isAlreadySaved = prev.includes(index);

            if (!isAlreadySaved) {
                setShowSnackbar(true);

                setTimeout(() => {
                    setShowSnackbar(false);
                }, 2500);
            }

            return isAlreadySaved ? prev.filter((item) => item !== index) : [...prev, index];
        });
    };

    const saveAllOutfits = () => {
        if (savedOutfits.length === outfits.length) {
            return;
        }

        setSavedOutfits(outfits.map((_, index) => index));

        setShowSnackbar(true);

        setTimeout(() => {
            setShowSnackbar(false);
        }, 2500);
    };

    const closeSnackbar = () => {
        setShowSnackbar(false);
    };

    /*
    Prevent flickering by generating uuids only once with useMemo.
    Using uuid for practice.
    */
    const outfits = useMemo(() => {
        return [
            { src: outfit01, id: uuidv4() },
            { src: outfit02, id: uuidv4() },
            { src: outfit03, id: uuidv4() },
            { src: outfit04, id: uuidv4() },
            { src: outfit05, id: uuidv4() },
            { src: outfit06, id: uuidv4() },
        ];
    }, []);

    return (
        <div>
            <Statusbar titleBar={true} title="Get My Look" exitLink="/suggest" />

            <h1 className={styles.heading}>Suggested Outfits</h1>

            <button className={styles.saveAllButton} onClick={saveAllOutfits}>
                Save all
            </button>

            <div className={styles.outfitContainer}>
                {outfits.map((outfit, index) => (
                    <div key={outfit.id} className={styles.outfitWrapper}>
                        <Image
                            src={outfit.src}
                            alt={`outfit${index + 1}`}
                            className={styles.outfit}
                            priority
                        />
                        <button className={styles.saveButton} onClick={() => toggleSave(index)}>
                            <Image
                                src={savedOutfits.includes(index) ? saveFilled : saveOutline}
                                alt="save icon"
                                className={styles.saveIcon}
                            />
                        </button>
                    </div>
                ))}
            </div>

            <div className={styles.navButtons}>
                <RoundedButton
                    text="Edit Selections"
                    href="/suggest/preference"
                    type="secondary"
                    className={styles.navButton}
                />
                <RoundedButton
                    text="Go to Wardrobe"
                    href="/wardrobeHome"
                    type="primary"
                    className={styles.navButton}
                />

                {showSnackbar && (
                    <div className={`${styles.snackbar} ${showSnackbar ? styles.show : ""}`}>
                        <p className={styles.snackbarText}>Saved to your wardrobe</p>
                        <button className={styles.snackbarClose} onClick={closeSnackbar}>
                            ×
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
