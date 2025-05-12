"use client";

import { useState } from "react";
import HelloHeader from "@/app/components/suggest/HelloHeader";
import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import OptionContainer from "@/app/components/suggest/OptionContainer/OptionContainer";
import happyIcon from "@/public/images/suggest-happy.png";
import calmIcon from "@/public/images/suggest-calm.png";
import confidentIcon from "@/public/images/suggest-confident.png";
import lazyIcon from "@/public/images/suggest-lazy.png";
import downIcon from "@/public/images/suggest-down.png";
import daringIcon from "@/public/images/suggest-daring.png";
import NextOrBackButton from "@/app/components/suggest/NextOrBackButton/NextOrBackButton";

export default function SuggestionMoodPage() {
    const [moodItems, setMoodItems] = useState([
        { icon: happyIcon, label: "Happy", selected: false },
        { icon: calmIcon, label: "Calm", selected: false },
        { icon: confidentIcon, label: "Confident", selected: false },
        { icon: lazyIcon, label: "Lazy", selected: false },
        { icon: downIcon, label: "Down", selected: false },
        { icon: daringIcon, label: "Daring", selected: false },
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
            <Statusbar titleBar={true} title="Get My Look" />
            <HelloHeader />
            <OptionContainer
                heading="How’s your mood?"
                subheading="Your mood, your style—let’s match it up!"
                items={moodItems}
                onItemClick={handleItemClick}
            />
            <NextOrBackButton
                showBack={true}
                showSkip={true}
                back="/suggest"
                next="/suggest/weather"
            />
        </div>
    );
}
