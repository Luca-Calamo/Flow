"use client";

import Image from "next/image";
import styles from "./edit-profile-avatar2.module.css";
import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import profilePic from "@/public/images/suggest-lazy.png";
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
        <div className={styles.ourterContainer}>
            <Statusbar
                titleBar={true}
                title="Edit Profile"
                showbackButton={true}
                backLink="/profile"
                showExitButton={false}
            />

            <div className={styles.contentContainer}>
                <div className={styles.avatarContainer}>
                    <Image src={profilePic} alt="profile" className={styles.profilePic} />
                    <Link href="/profile/edit-profile-change-pic" className={styles.avatarEditBtn}>
                        <Image
                            src={changeAvatarIcon}
                            alt="change avatar"
                            className={styles.changeAvatarIcon}
                        />
                    </Link>
                </div>

                <form className={styles.form}>
                    <label className={styles.label}>Name</label>
                    <input
                        className={styles.input}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label className={styles.label}>Email</label>
                    <input
                        className={styles.input}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className={styles.label}>Password</label>
                    <input
                        className={styles.input}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label className={styles.label}>Date of Birth</label>
                    <input
                        className={styles.input}
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />

                    <label className={styles.label}>Country/Region</label>
                    <input
                        className={styles.input}
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    ></input>

                    <Link href="/profile/edit-profile-saved" className={styles.saveBtn}>
                        Save changes
                    </Link>
                </form>
            </div>
        </div>
    );
}
