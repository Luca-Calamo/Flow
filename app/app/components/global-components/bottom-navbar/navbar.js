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

export default function Navbar({ active }) {
    return (
        <div className={styles.navbar}>
            <div className={styles.item}>
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
            </div>
            <div className={styles.item}>
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
            </div>
            <div>
                <Image src={CameraIcon} alt='camera icon' />
            </div>
            <div className={styles.item}>
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
            </div>
            <div className={styles.item}>
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
            </div>
        </div>
    );
}
