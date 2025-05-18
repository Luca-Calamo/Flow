"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ArticleCard from "@/app/components/articles/articleCard";
import Navbar from "@/app/components/global-components/bottom-navbar/navbar";
import TopBar from "@/app/components/global-components/topBar/topBar";
import SmallButton from "@/app/components/buttons/smallButton";
import styles from "@/app/articles/css/styles.module.css";
export default function Articles() {
    const router = useRouter();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("/carousel.json")
            .then((res) => res.json())
            .then(setArticles)
            .catch((err) => {
                console.error("Error fetching articles:", err);
            });
    }, []);

    const handleCardClick = (article) => {
        router.push(
            `/articles/singleArticle?article=${encodeURIComponent(article)}`
        );
    };

    return (
        <div className={styles.body}>
            <TopBar
                title='Articles'
                hasBar={true}
                hasIcon={true}
                initialActive='right'
            />
            <div className={styles.btncontainer}>
                <div className={styles.button}>
                    <SmallButton text='Build' />
                </div>
                <div className={styles.button}>
                    <SmallButton text='Tags' />
                </div>
            </div>
            <div className={styles.container}>
                {articles.map((item, index) => {
                    console.log("Rendering article:", item);
                    return (
                        <button
                            key={index}
                            onClick={() => handleCardClick(item.image)}
                            className={styles.articleCardButton}
                        >
                            <ArticleCard src={item.image} />
                        </button>
                    );
                })}
            </div>
            <Navbar />
        </div>
    );
}
