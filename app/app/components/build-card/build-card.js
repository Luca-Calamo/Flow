export default function FitBuilder() {
    const [fit, setFit] = useState({
        hats: 17,
        shirts: 17,
        pants: 17,
        shoes: 17,
    });
    const [activeType, setActiveType] = useState(null);

    function handleSelect(type, id) {
        setFit((prev) => ({ ...prev, [type]: id }));
    }

    return (
        <div className={styles.card}>
            {['hats', 'shirts', 'pants', 'shoes'].map((type) => (
                <ArticleSlot
                    key={type}
                    type={type}
                    selectedId={fit[type]}
                    onClick={setActiveType}
                />
            ))}
            {activeType && (
                <ArticleOverlay
                    type={activeType}
                    onSelect={handleSelect}
                    onClose={() => setActiveType(null)}
                />
            )}
        </div>
    );
}
