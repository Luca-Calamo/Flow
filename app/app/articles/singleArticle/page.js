"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TopBar from "@/app/components/global-components/topBar/topBar";
import Photo from "@/app/components/camera/photoView/photo";
import Description from "@/app/components/camera/photoView/description";
import TagsOverlay from "@/app/camera/tagsOverlay/page";
import Navbar from "@/app/components/global-components/bottom-navbar/navbar";
import styles from "@/app/articles/singleArticle/css/styles.module.css";

export default function PhotoView() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [articleData, setArticleData] = useState([]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const article = searchParams.get("article");

    useEffect(() => {
        fetch("/carousel.json")
            .then((res) => res.json())
            .then(setArticleData);
    }, []);

    const item = articleData.find((p) => p.image === article);

    return (
        <div className={styles.page}>
            <TopBar title='Articles' hasIcon={true} />
            {showOverlay && (
                <TagsOverlay onClose={() => setShowOverlay(false)} />
            )}
            {item && (
                <>
                    <div className='photo'>
                        <Photo
                            src={item?.image}
                            onClick={() => setShowOverlay(true)}
                            buttonText='Edit Tags'
                        />
                    </div>

                    <Description
                        shortText={item?.descriptionShort}
                        longText={item?.descriptionLong}
                    />
                </>
            )}
            <Navbar />
        </div>
    );
}
