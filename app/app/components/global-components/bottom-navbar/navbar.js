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
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className={styles.navbar}>
            <a href='/' className={styles.item}>
                <Image
                    src={pathname === "/" ? ActiveHomeIcon : HomeIcon}
                    alt='home icon'
                />
                <p
                    className={`${styles.text} ${
                        pathname === "/"
                            ? styles["text-active"]
                            : styles["text-inactive"]
                    }`}
                >
                    Home
                </p>
            </a>

            <a href='/suggest' className={styles.item}>
                <Image
                    src={
                        pathname === "/suggest"
                            ? ActiveSuggestIcon
                            : SuggestIcon
                    }
                    alt='suggest icon'
                />
                <p
                    className={`${styles.text} ${
                        pathname === "/suggest"
                            ? styles["text-active"]
                            : styles["text-inactive"]
                    }`}
                >
                    Suggest
                </p>
            </a>

            <a href='/camera'>
                <Image
                    src={CameraIcon}
                    alt='camera icon'
                    className={styles.cameraIcon}
                />
            </a>

            <a href='/wardrobe' className={styles.item}>
                <Image
                    src={
                        pathname === "/wardrobe"
                            ? ActiveWardrobeIcon
                            : WardrobeIcon
                    }
                    alt='wardrobe icon'
                />
                <p
                    className={`${styles.text} ${
                        pathname === "/wardrobe"
                            ? styles["text-active"]
                            : styles["text-inactive"]
                    }`}
                >
                    Wardrobe
                </p>
            </a>

            <a href='/profile' className={styles.item}>
                <Image
                    src={
                        pathname === "/profile"
                            ? ActiveProfileIcon
                            : ProfileIcon
                    }
                    alt='profile icon'
                />
                <p
                    className={`${styles.text} ${
                        pathname === "/profile"
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
