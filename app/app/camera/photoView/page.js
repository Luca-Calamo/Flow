"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TopBar from "@/app/components/global-components/topBar/topBar";
import Photo from "@/app/components/camera/photoView/photo";
import Description from "@/app/components/camera/photoView/description";
import LargeButton from "@/app/components/buttons/largeButton";
import TagsOverlay from "@/app/camera/tagsOverlay/page";
import styles from "@/app/camera/photoView/photoView.module.css";

export default function PhotoView() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [photoData, setPhotoData] = useState([]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const photo = searchParams.get("photo");

    useEffect(() => {
        fetch("/carousel.json")
            .then((res) => res.json())
            .then(setPhotoData);
    }, []);

    const item = photoData.find((p) => p.image === photo);

    return (
        <div className={styles.page}>
            <TopBar
                title='Photo View'
                hasBtn={true}
                btnTxt='Re-take photo'
                btnType='secondary'
                btnOnClick={() => router.push("/camera")}
            />
            {showOverlay && (
                <TagsOverlay onClose={() => setShowOverlay(false)} />
            )}
            {item && (
                <>
                    <div className='photo'>
                        <Photo
                            src={item?.image}
                            onClick={() => setShowOverlay(true)}
                        />
                    </div>

                    <Description
                        shortText={item?.descriptionShort}
                        longText={item?.descriptionLong}
                    />
                </>
            )}

            <div className={styles.buttonContainer}>
                <div className={styles.button}>
                    <LargeButton
                        text={"Add Another"}
                        type={"secondary"}
                        onClick={() => router.push("/camera")}
                    />
                </div>
                <div className={styles.button}>
                    <LargeButton
                        text={"Save"}
                        type={"primary"}
                        onClick={() => {
                            localStorage.removeItem("photoIndex");
                            router.push("/articles");
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
