import styles from "@/app/components/buttons/css/tagButton.module.css";
import { useState } from "react";

export default function TagButton({ text, onClick, type = "secondary" }) {
    const [isSelected, setIsSelected] = useState(false);

    function handleClick() {
        setIsSelected(!isSelected);
    }

    return (
        <div
            className={`${styles.smlBtn} ${
                isSelected ? styles.primary : styles.secondary
            } `}
            onClick={handleClick}
        >
            <p className={styles.smlBtnText}>{text}</p>
        </div>
    );
}
