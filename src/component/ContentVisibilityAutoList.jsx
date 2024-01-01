const ContentVisibilityAutoList = ({ items, itemHeight, windowHeight }) => {
    return (<div style={ { overflowY: "scroll", display: "flex", flexDirection: "column", height: `${windowHeight}px`, width: "500px" } }>
        { items.map((item) => {
            return (
                <div key={ item.id } style={ { contentVisibility: "auto", containIntrinsicSize: `0 ${itemHeight}px`, width: "100%", height: `${itemHeight}px`, lineHeight: `${itemHeight}px`, textAlign: "center", border: "1px solid #ccc" } }>
                    { item.name }
                </div>
            );
        }) }
    </div>);
};

export default ContentVisibilityAutoList;