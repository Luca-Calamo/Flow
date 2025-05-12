"use client";

import HelloHeader from "@/app/components/suggest/HelloHeader";
import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import NextOrBackButton from "@/app/components/suggest/NextOrBackButton/NextOrBackButton";

export default function SuggestionPreferPage() {
    return (
        <div>
            <Statusbar titleBar={true} title="Get My Look" />
            <HelloHeader />

            <NextOrBackButton showBack={true} showSkip={true} back="/suggest/plan" next="#" />
        </div>
    );
}
