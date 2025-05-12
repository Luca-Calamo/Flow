"use client";
import HelloHeader from "../components/suggest/HelloHeader";
import Statusbar from "../components/global-components/statusbar/Statusbar";

export default function SuggestionPage() {
    return (
        <div>
            <Statusbar titleBar={true} title="Get My Look" />
            <HelloHeader />
        </div>
    );
}
