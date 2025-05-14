"use client";

import { useState, useEffect } from "react";
import HelloHeader from "@/app/components/suggest/HelloHeader";
import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import OptionContainer from "@/app/components/suggest/OptionContainer/OptionContainer";
import NextOrBackButton from "@/app/components/suggest/NextOrBackButton/NextOrBackButton";

export default function SuggestionWeatherPage() {
    const [weatherItems, setWeatherItems] = useState([]);
    // Replacing .then() with async/await for practice.
    useEffect(() => {
        const fetchWeatherItems = async () => {
            try {
                const response = await fetch("/suggestOptions.json");
                const data = await response.json();
                const weatherData = data.filter((item) => item.category === "weather");
                setWeatherItems(weatherData);
            } catch (error) {
                console.error("Error fetching weather items:", error);
            }
        };

        fetchWeatherItems();
    }, []);

    const handleItemClick = (index) => {
        const updatedItems = weatherItems.map((item, i) => ({
            ...item,
            selected: i === index,
        }));
        setWeatherItems(updatedItems);
    };

    return (
        <div>
            <Statusbar titleBar={true} title="Get My Look" exitLink="/suggest" />
            <HelloHeader />
            <OptionContainer
                heading="How’s the weather?"
                subheading="Let’s dress for the weather."
                items={weatherItems}
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
