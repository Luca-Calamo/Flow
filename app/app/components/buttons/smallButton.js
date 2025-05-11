import styles from "@/app/components/buttons/css/smallButton.module.css";

export default function SmallButton({ text, onClick, type = "primary" }) {
    return (
        <div
            className={`${styles.smlBtn} ${
                type === "primary" ? styles.primary : styles.secondary
            }`}
            onClick={onClick}
        >
            <p className={styles.smlBtnText}>{text}</p>
        </div>
    );
}
