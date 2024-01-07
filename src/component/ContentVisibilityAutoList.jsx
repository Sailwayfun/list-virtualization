const ContentVisibilityAutoList = ({ items, itemHeight, windowHeight }) => {
    return (
        <div style={ { display: "flex", flexDirection: "column" } }>
            <h2>content-visibility:auto</h2>
            <div style={ { overflowY: "scroll", position: "relative", height: `${windowHeight}px` } }>
                { items.map((item, index) => {
                    return (
                        <div key={ item.id } style={ {
                            position: "absolute",
                            contentVisibility: "auto", containIntrinsicSize: `0 ${itemHeight}px`,
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

export default ContentVisibilityAutoList;