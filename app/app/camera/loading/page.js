"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import Image from "next/image";
import styles from "./loading.module.css";
import loadingGif from "@/public/images/loading.gif";

export default function LoadingPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const next = searchParams.get("next") || "/camera/photoView";

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push(next);
        }, 1500);

        return () => clearTimeout(timer);
    }, [router, next]);

    return (
        <div className={styles.page}>
            <Statusbar titleBar={true} title='Loading' showExitButton={false} />
            <div className={styles.container}>
                <Image
                    src={loadingGif}
                    alt='generating'
                    className={styles.gif}
                    priority
                />
                <p className={styles.text}>Generating...</p>
            </div>
        </div>
    );
}
