"use client";

import Link from "next/link";
import photoData from "@/data/db.json";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TopBar from "@/app/components/global-components/topBar/topBar";
import Photo from "@/app/components/camera/photoView/photo";
import Description from "@/app/components/camera/photoView/description";
import LargeButton from "@/app/components/buttons/largeButton";
import TagsOverlay from "@/app/camera/tagsOverlay/page";
import styles from "@/app/camera/photoView/photoView.module.css";

export default function PhotoView() {
    const [showOverlay, setShowOverlay] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const photo = searchParams.get("photo");

    let clicked = () => {
        router.push("/camera");
    };

    const item = photoData.find((p) => p.src === photo);

    return (
        <div className={styles.page}>
            <TopBar
                title='Photo View'
                hasBtn={true}
                btnTxt='Re-take photo'
                btnType='secondary'
                btnOnClick={clicked}
            />
            {showOverlay && (
                <TagsOverlay onClose={() => setShowOverlay(false)}>
                    CONTENT
                </TagsOverlay>
            )}
            <Photo src={item?.src} onClick={() => setShowOverlay(true)} />
            <Description
                shortText={item?.descriptionShort}
                longText={item?.descriptionLong}
            />
            <div className={styles.buttonContainer}>
                <Link href='/camera' className={styles.button}>
                    <LargeButton text={"Add Another"} type={"secondary"} />
                </Link>
                <Link href='/articles' className={styles.button}>
                    <LargeButton text={"Save"} type={"primary"} />
                </Link>
            </div>
        </div>
    );
}
