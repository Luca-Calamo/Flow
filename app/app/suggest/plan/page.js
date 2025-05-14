"use client";

import { useState } from "react";
import HelloHeader from "@/app/components/suggest/HelloHeader";
import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import OptionContainer from "@/app/components/suggest/OptionContainer/OptionContainer";
import workIcon from "@/public/images/suggest-work.png";
import dateIcon from "@/public/images/suggest-date.png";
import workoutIcon from "@/public/images/suggest-workout.png";
import casualIcon from "@/public/images/suggest-casual.png";
import formalIcon from "@/public/images/suggest-formal.png";
import vacationIcon from "@/public/images/suggest-vacation.png";
import NextOrBackButton from "@/app/components/suggest/NextOrBackButton/NextOrBackButton";

export default function SuggestionPlanPage() {
    const [moodItems, setMoodItems] = useState([
        { icon: workIcon, label: "Work", selected: false },
        { icon: dateIcon, label: "Date", selected: false },
        { icon: workoutIcon, label: "Workout", selected: false },
        { icon: casualIcon, label: "Casual", selected: false },
        { icon: formalIcon, label: "Formal", selected: false },
        { icon: vacationIcon, label: "Vacation", selected: false },
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
                heading="What’s your plan?"
                subheading="Let’s find your perfect look!"
                items={moodItems}
                onItemClick={handleItemClick}
            />
            <NextOrBackButton
                showBack={true}
                showSkip={true}
                back="/suggest/weather"
                next="/suggest/preference"
            />
        </div>
    );
}
