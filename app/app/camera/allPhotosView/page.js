"use client";

import { useEffect, useState } from "react";
import photoData from "@/data/db.json";
import { useRouter } from "next/navigation";
import TopBar from "@/app/components/global-components/topBar/topBar";
import ArticleCard from "@/app/components/articles/articleCard";
import LargeButton from "@/app/components/buttons/largeButton";
import styles from "@/app/camera/allPhotosView/allPhotosView.module.css";

export default function AllPhotosView() {
    const router = useRouter();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const storedIndex = parseInt(
            localStorage.getItem("photoIndex") || "0",
            10
        );
        const visiblePhotos = photoData.slice(0, storedIndex);
        setPhotos(visiblePhotos);
    }, []);

    const handleCardClick = (photo) => {
        router.push(`/camera/photoView?photo=${encodeURIComponent(photo)}`);
    };

    return (
        <div className={styles.page}>
            <TopBar
                title='Photos View'
                hasBtn={true}
                btnTxt='Re-take photo'
                btnType='secondary'
                btnOnClick={() => router.push("/camera")}
            />
            <div className={styles.container}>
                {photos.map((photoObj, index) => (
                    <button
                        key={index}
                        onClick={() => handleCardClick(photoObj.src)}
                        className={styles.articleCardButton}
                    >
                        <ArticleCard src={photoObj.src} />
                    </button>
                ))}
            </div>
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
