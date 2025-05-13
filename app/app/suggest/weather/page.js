"use client";

import { useState } from "react";
import HelloHeader from "@/app/components/suggest/HelloHeader";
import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import OptionContainer from "@/app/components/suggest/OptionContainer/OptionContainer";
import sunnyIcon from "@/public/images/suggest-sunny.png";
import cloudyIcon from "@/public/images/suggest-cloudy.png";
import overcastIcon from "@/public/images/suggest-overcast.png";
import rainyIcon from "@/public/images/suggest-rainy.png";
import snowyIcon from "@/public/images/suggest-snowy.png";
import windyIcon from "@/public/images/suggest-windy.png";
import NextOrBackButton from "@/app/components/suggest/NextOrBackButton/NextOrBackButton";

export default function SuggestionWeatherPage() {
    const [moodItems, setMoodItems] = useState([
        { icon: sunnyIcon, label: "Sunny", selected: true },
        { icon: cloudyIcon, label: "Cloudy", selected: false },
        { icon: overcastIcon, label: "Overcast", selected: false },
        { icon: rainyIcon, label: "Rainy", selected: false },
        { icon: snowyIcon, label: "Snowy", selected: false },
        { icon: windyIcon, label: "Windy", selected: false },
    ]);

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
                heading="How’s the weather?"
                subheading="Let’s dress for the weather."
                items={moodItems}
                onItemClick={handleItemClick}
            />
            <NextOrBackButton
                showBack={true}
                showSkip={false}
                back="/suggest/mood"
                next="/suggest/plan"
            />
        </div>
    );
}
