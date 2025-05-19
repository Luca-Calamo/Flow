"use client";

import Image from "next/image";
import externalStyles from "@/app/profile/edit-profile/edit-profile.module.css";
import styles from "./edit-profile-saved.module.css";
import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import profilePic from "@/public/images/profile.png";
import Link from "next/link";
import { useState } from "react";
import changeAvatarIcon from "@/public/images/edit-profile-camera.svg";

export default function EditProfilePage() {
    const [name, setName] = useState("Ethan");
    const [email, setEmail] = useState("ethan@gmail.com");
    const [password, setPassword] = useState("**********");
    const [dob, setDob] = useState("1995-05-23");
    const [country, setCountry] = useState("Nigeria");

    return (
        <div className={externalStyles.ourterContainer}>
            <Statusbar
                titleBar={true}
                title="Edit Profile"
                showbackButton={true}
                backLink="/profile"
                showExitButton={false}
            />

            <div className={externalStyles.contentContainer}>
                <div className={externalStyles.avatarContainer}>
                    <Image src={profilePic} alt="profile" className={externalStyles.profilePic} />
                    <Link
                        href="/profile/edit-profile-change-pic"
                        className={externalStyles.avatarEditBtn}
                    >
                        <Image
                            src={changeAvatarIcon}
                            alt="change avatar"
                            className={externalStyles.changeAvatarIcon}
                        />
                    </Link>
                </div>

                <form className={externalStyles.form}>
                    <label className={externalStyles.label}>Name</label>
                    <input
                        className={externalStyles.input}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label className={externalStyles.label}>Email</label>
                    <input
                        className={externalStyles.input}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className={externalStyles.label}>Password</label>
                    <input
                        className={externalStyles.input}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label className={externalStyles.label}>Date of Birth</label>
                    <input
                        className={externalStyles.input}
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />

                    <label className={externalStyles.label}>Country/Region</label>
                    <input
                        className={externalStyles.input}
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    ></input>

                    <Link href="/profile/edit-profile-saved" className={externalStyles.saveBtn}>
                        Save changes
                    </Link>
                </form>
            </div>
            <div className={styles.overlay}>
                <div className={styles.dialog}>
                    <Link href="/profile/edit-profile" className={styles.closeBtn}>
                        ×
                    </Link>
                    <div className={styles.title}>Profile updated successfully.</div>
                </div>
            </div>
        </div>
    );
}
