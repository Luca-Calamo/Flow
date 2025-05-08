"use client";

import { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import HomeIcon from "./images/home-icon.svg";
import ActiveHomeIcon from "./images/active-home-icon.svg";
import ActiveSuggestIcon from "./images/active-suggest-icon.svg";
import SuggestIcon from "./images/suggest-icon.svg";
import ActiveWardrobeIcon from "./images/active-wardrobe-icon.svg";
import WardrobeIcon from "./images/wardrobe-icon.svg";
import ActiveProfileIcon from "./images/active-profile-icon.svg";
import ProfileIcon from "./images/profile-icon.svg";
import CameraIcon from "./images/camera-icon.svg";

export default function Navbar() {
    const [active, setActive] = useState("home");

    return (
        <div className={styles.navbar}>
            <a
                href='/'
                className={styles.item}
                onClick={() => setActive("home")}
            >
                <Image
                    src={active === "home" ? ActiveHomeIcon : HomeIcon}
                    alt='home icon'
                />
                <p
                    className={`${styles.text} ${
                        active === "home"
                            ? styles["text-active"]
                            : styles["text-inactive"]
                    }`}
                >
                    Home
                </p>
            </a>
            <a
                href='/'
                className={styles.item}
                onClick={() => setActive("suggest")}
            >
                <Image
                    src={active === "suggest" ? ActiveSuggestIcon : SuggestIcon}
                    alt='suggest icon'
                />
                <p
                    className={`${styles.text} ${
                        active === "suggest"
                            ? styles["text-active"]
                            : styles["text-inactive"]
                    }`}
                >
                    Suggest
                </p>
            </a>
            <a href='/' onClick={() => setActive("camera")}>
                <Image src={CameraIcon} alt='camera icon' />
            </a>
            <a
                href='/'
                className={styles.item}
                onClick={() => setActive("wardrobe")}
            >
                <Image
                    src={
                        active === "wardrobe"
                            ? ActiveWardrobeIcon
                            : WardrobeIcon
                    }
                    alt='wardrobe icon'
                />
                <p
                    className={`${styles.text} ${
                        active === "wardrobe"
                            ? styles["text-active"]
                            : styles["text-inactive"]
                    }`}
                >
                    Wardrobe
                </p>
            </a>
            <a
                href='/'
                className={styles.item}
                onClick={() => setActive("profile")}
            >
                <Image
                    src={active === "profile" ? ActiveProfileIcon : ProfileIcon}
                    alt='profile icon'
                />
                <p
                    className={`${styles.text} ${
                        active === "profile"
                            ? styles["text-active"]
                            : styles["text-inactive"]
                    }`}
                >
                    Profile
                </p>
            </a>
        </div>
    );
}
