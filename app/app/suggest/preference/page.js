"use client";

import HelloHeader from "@/app/components/suggest/HelloHeader";
import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import OptionContainer from "@/app/components/suggest/OptionContainer/OptionContainer";
import NextOrBackButton from "@/app/components/suggest/NextOrBackButton/NextOrBackButton";

export default function SuggestionMoodPage() {
    return (
        <div>
            <Statusbar titleBar={true} title="Get My Look" />
            <HelloHeader />

            <NextOrBackButton
                showBack={true}
                showSkip={true}
                back="/suggest/weather"
                next="/suggest/preference"
            />
        </div>
    );
}
