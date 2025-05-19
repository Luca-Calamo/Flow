"use client";

import Image from "next/image";
import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import Navbar from "@/app/components/global-components/bottom-navbar/navbar";

export default function SuggestionPage() {
    return (
        <div>
            <Statusbar titleBar={true} title="Fits" showExitButton={false} />
            <Navbar />
        </div>
    );
}
