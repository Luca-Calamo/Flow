"use client";

import Link from "next/link";
import { useState } from "react";
import Top_Bar from "@/app/components/global-components/top_bar/top_bar";
import Photo from "@/app/components/camera/photoView/photo";
import Description from "@/app/components/camera/photoView/description";
import LargeButton from "@/app/components/buttons/largeButton";
import TagsOverlay from "@/app/camera/tagsOverlay/page";
import styles from "@/app/camera/photoView/photoView.module.css";

export default function PhotoView() {
    const [showOverlay, setShowOverlay] = useState(false);
    let onClick = () => {
        return;
    };

    return (
        <div className={styles.page}>
            <Top_Bar
                title='Photo View'
                hasBtn={true}
                btnTxt='Re-take photo'
                btnType='secondary'
                btnOnClick={onClick}
            />
            {showOverlay && (
                <TagsOverlay onClose={() => setShowOverlay(false)}>
                    CONTENT
                </TagsOverlay>
            )}
            <Photo onClick={() => setShowOverlay(true)} />
            <Description />
            <div className={styles.buttonContainer}>
                <Link href='/camera' className={styles.button}>
                    <LargeButton text={"Add Another"} type={"secondary"} />
                </Link>
                <Link href='/' className={styles.button}>
                    <LargeButton text={"Save"} type={"primary"} />
                </Link>
            </div>
        </div>
    );
}
