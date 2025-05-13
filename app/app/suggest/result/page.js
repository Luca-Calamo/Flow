"use client";

import Statusbar from "@/app/components/global-components/statusbar/Statusbar";
import Image from "next/image";
import styles from "./result.module.css";

export default function LoadingPage() {
    return (
        <div>
            <Statusbar titleBar={true} title="Get My Look" exitLink="/suggest" />
        </div>
    );
}
