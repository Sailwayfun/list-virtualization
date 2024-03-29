const ContentVisibilityAutoList = ({ items, itemHeight, windowHeight, duration }) => {
    return (
        <div style={ { display: "flex", flexDirection: "column" } }>
            <h2>content-visibility:auto</h2>
            <p>Render Time: { duration }</p>
            <div style={ {
                overflowY: "scroll",
                position: "relative",
                height: `${windowHeight}px`
            } }>
                { items.map((item, index) => {
                    return (
                        <div key={ `${item.id}-${index}` }
                            style={ {
                                position: "absolute",
                                contentVisibility: "auto",
                                containIntrinsicSize: `0 ${itemHeight}px`,
                                width: "100%",
                                top: `${index * itemHeight}px`,
                                lineHeight: `${itemHeight}px`,
                                textAlign: "center",
                                border: "1px solid #ccc",
                                display: "flex",
                                alignItems: "center",
                            } }>
                            <img src={ item.picture } alt="random" style={ { marginRight: "10px" } } />
                            { item.name }
                        </div>
                    );
                }) }
            </div>
        </div>

    );
};

export default ContentVisibilityAutoList;