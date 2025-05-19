"use client";

import Image from "next/image";
import externalStyles from "../profile.module.css";
import styles from "./logout-confirm.module.css";
import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import Navbar from "@/app/components/global-components/bottom-navbar/navbar";
import profilePic from "@/public/images/profile.png";
import Link from "next/link";
import RoundedButton from "@/app/components/global-components/rounded-button/RoundedButton";

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
                    <div className={styles.title}>Are you sure you want to log out?</div>
                    <div className={styles.buttonRow}>
                        <RoundedButton
                            text="No"
                            href="/profile"
                            type="secondary"
                            className={styles.noBtn}
                        />
                        <RoundedButton
                            text="Yes"
                            href="/profile/logout-success"
                            type="primary"
                            className={styles.yesBtn}
                        />
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    );
}
