"use client";

import Image from "next/image";
import externalStyles from "../profile.module.css";
import styles from "./logout-success.module.css";
import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import Navbar from "@/app/components/global-components/bottom-navbar/navbar";
import profilePic from "@/public/images/profile.png";
import Link from "next/link";

export default function ProfilePage() {
    return (
        <div className={externalStyles.ourterContainer}>
            <Statusbar
                titleBar={true}
                title="Profile"
                showbackButton={false}
                showExitButton={false}
            />
            <div className={externalStyles.contentContainer}>
                <div className={externalStyles.profileInfo}>
                    <Image src={profilePic} alt="Ethan" className={externalStyles.profilePic} />
                    <div className={externalStyles.profileText}>
                        <h2 className={externalStyles.name}>Ethan</h2>
                        <p className={externalStyles.email}>ethan@gmail.com</p>
                    </div>
                </div>

                <Link href="/profile/edit-profile" className={externalStyles.editButton}>
                    Edit Profile
                </Link>

                <div className={externalStyles.settingsContainer}>
                    <Link href="/profile/accessibility" className={externalStyles.settingRow}>
                        <span>Accessibility Settings</span>
                        <span className={externalStyles.arrow}>›</span>
                    </Link>
                    <Link href="/profile/logout-confirm" className={externalStyles.settingRow}>
                        <span>Log Out</span>
                        <span className={externalStyles.arrow}>›</span>
                    </Link>
                </div>
            </div>
            <div className={styles.overlay}>
                <div className={styles.dialog}>
                    <Link href="/profile" className={styles.closeBtn}>
                        ×
                    </Link>
                    <div className={styles.title}>Logout successful.</div>
                </div>
            </div>
            <Navbar />
        </div>
    );
}
