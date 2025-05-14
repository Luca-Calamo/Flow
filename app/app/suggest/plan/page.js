"use client";

import { useState, useEffect } from "react";
import HelloHeader from "@/app/components/suggest/HelloHeader";
import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import OptionContainer from "@/app/components/suggest/OptionContainer/OptionContainer";
import NextOrBackButton from "@/app/components/suggest/NextOrBackButton/NextOrBackButton";

export default function SuggestionPlanPage() {
    const [planItems, setPlanItems] = useState([]);

    useEffect(() => {
        fetch("/suggestOptions.json")
            .then((response) => response.json())
            .then((data) => {
                const planData = data.filter((item) => item.category === "plan");
                setPlanItems(planData);
            })
            .catch((error) => console.error("Error fetching plan items:", error));
    }, []);

    const handleItemClick = (index) => {
        const updatedItems = planItems.map((item, i) => ({
            ...item,
            selected: i === index,
        }));
        setPlanItems(updatedItems);
    };
    return (
        <div>
            <Statusbar titleBar={true} title="Get My Look" exitLink="/suggest" />
            <HelloHeader />
            <OptionContainer
                heading="What’s your plan?"
                subheading="Let’s find your perfect look!"
                items={planItems}
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
