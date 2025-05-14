"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import Image from "next/image";
import styles from "./loading.module.css";
import loadingGif from "@/public/images/loading.gif";

export default function LoadingPage() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/suggest/result");
        }, 1500);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div>
            <Statusbar titleBar={true} title="Get My Look" showExitButton={false} />
            <div className={styles.container}>
                <Image src={loadingGif} alt="generating" className={styles.gif} />
                <p className={styles.text}>Generating...</p>
            </div>
        </div>
    );
}
