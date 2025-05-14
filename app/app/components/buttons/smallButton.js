import styles from "@/app/components/buttons/css/smallButton.module.css";

export default function SmallButton({
    text,
    onClick,
    type = "primary",
    spacing = "fixed",
}) {
    return (
        <div
            className={`${styles.smlBtn} ${
                type === "primary"
                    ? styles.primary
                    : type === "secondary"
                    ? styles.secondary
                    : styles.tertiary
            } ${spacing === "fixed" ? styles.fixed : styles.full}`}
            onClick={onClick}
        >
            <p className={styles.smlBtnText}>{text}</p>
        </div>
    );
}
