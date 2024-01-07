const NormalList = ({ items, itemHeight }) => {
    return (
        <div style={ { display: "flex", flexDirection: "column" } }>
            <h2>normal</h2>
            <div style={ { overflowY: "scroll", position: "relative", height: "500px", width: "100%" } }>
                { items.map((item, index) => {
                    return (
                        <div key={ item.id } style={ {
                            position: "absolute",
                            width: "100%", top: `${index * itemHeight}px`, lineHeight: `${itemHeight}px`, textAlign: "center", border: "1px solid #ccc"
                        } }>
                            { item.name }
                        </div>
                    );
                }) }
            </div>
        </div>

    );
};

export default NormalList;