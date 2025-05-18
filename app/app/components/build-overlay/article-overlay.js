function ArticleOverlay({ type, onSelect, onClose }) {
    const filtered = articles.filter((article) => article.tags.includes(type));

    return (
        <div className={styles.overlay}>
            <button className={styles.closeButton} onClick={onClose}>
                ✕
            </button>
            <h2>Select a {type}</h2>
            <div className={styles.grid}>
                {filtered.map((item) => (
                    <img
                        key={item.id}
                        src={item.image}
                        alt={item.title}
                        onClick={() => {
                            onSelect(type, item.id);
                            onClose();
                        }}
                        className={styles[type]}
                    />
                ))}
            </div>
        </div>
    );
}
