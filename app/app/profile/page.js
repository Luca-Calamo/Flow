"use client";

import Image from "next/image";
import styles from "./profile.module.css";
import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import Navbar from "@/app/components/global-components/bottom-navbar/navbar";
import profilePic from "@/public/images/profile.png";
import Link from "next/link";

export default function ProfilePage() {
    return (
        <div className={styles.ourterContainer}>
            <Statusbar
                titleBar={true}
                title="Profile"
                showbackButton={false}
                showExitButton={false}
            />
            <div className={styles.contentContainer}>
                <div className={styles.profileInfo}>
                    <Image src={profilePic} alt="Ethan" className={styles.profilePic} />
                    <div className={styles.profileText}>
                        <h2 className={styles.name}>Ethan</h2>
                        <p className={styles.email}>ethan@gmail.com</p>
                    </div>
                </div>

                <Link href="/profile/edit-profile" className={styles.editButton}>
                    Edit Profile
                </Link>

                <div className={styles.settingsContainer}>
                    <Link href="/profile/accessibility" className={styles.settingRow}>
                        <span>Accessibility Settings</span>
                        <span className={styles.arrow}>›</span>
                    </Link>
                    <Link href="/profile/logout-confirm" className={styles.settingRow}>
                        <span>Log Out</span>
                        <span className={styles.arrow}>›</span>
                    </Link>
                </div>
            </div>
            <Navbar />
        </div>
    );
}
