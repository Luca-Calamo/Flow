"use client";

import { useState, useEffect } from "react";
import HelloHeader from "@/app/components/suggest/HelloHeader";
import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import OptionContainer from "@/app/components/suggest/OptionContainer/OptionContainer";
import NextOrBackButton from "@/app/components/suggest/NextOrBackButton/NextOrBackButton";

export default function SuggestionMoodPage() {
    const [moodItems, setMoodItems] = useState([]);

    useEffect(() => {
        fetch("/suggestOptions.json")
            .then((response) => response.json())
            .then((data) => {
                const moodData = data.filter((item) => item.category === "mood");
                setMoodItems(moodData);
            })
            .catch((error) => console.error("Error fetching mood items:", error));
    }, []);

    const handleItemClick = (index) => {
        const updatedItems = moodItems.map((item, i) => ({
            ...item,
            selected: i === index,
        }));
        setMoodItems(updatedItems);
    };

    return (
        <div>
            <Statusbar titleBar={true} title="Get My Look" exitLink="/suggest" />
            <HelloHeader />
            <OptionContainer
                heading="How’s your mood?"
                subheading="Your mood, your style—let’s match it up!"
                items={moodItems}
                onItemClick={handleItemClick}
            />
            <NextOrBackButton showBack={false} showSkip={true} next="/suggest/weather" />
        </div>
    );
}
