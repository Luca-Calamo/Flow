import IndividualFits from "@/app/components/individual-fits/IndiFitsCard";
import TopBar from "@/app/components/global-components/topBar/topBar";
import Navbar from "@/app/components/global-components/bottom-navbar/navbar";
import SmallButton from "@/app/components/buttons/smallButton";
import styles from "@/app/individual-fits4/css/styles.module.css";
import Link from "next/link";

export default function IndiFits() {
    return (
        <div className={styles.container}>
            <TopBar title="Fits" hasIcon={false} />
            <div className={styles.btncontainer}>
                <Link href="/fits">
                    <div className={styles.txtBtn}>
                        <img className={styles.bckBtn} src="/images/arrow-black.svg"></img>
                        <p className={styles.text}>Back to Wardrobe</p>
                    </div>
                </Link>
            </div>
            <div className={styles.body}>
                <IndividualFits src=" /images/Fit4.png" />
            </div>
            <Navbar />
        </div>
    );
}
