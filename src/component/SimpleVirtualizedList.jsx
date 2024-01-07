import { useState, useMemo } from 'react';


const SimpleVirtualizedList = ({ itemCount, itemHeight, windowHeight, renderItems, duration }) => {
    const [scrollTop, setScrollTop] = useState(0);
    function handleScroll(e) {
        setScrollTop(e.target.scrollTop);
    }
    const innerHeight = useMemo(() => itemCount * itemHeight, [itemCount, itemHeight]);
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(itemCount - 1, Math.floor((scrollTop + windowHeight) / itemHeight));
    return (
        <div style={ { display: "flex", flexDirection: "column" } }>
            <h2>onScroll and position</h2>
            <p>Render Time: { duration }</p>
            <div onScroll={ handleScroll } className="scroll"
                style={ {
                    overflowY: "scroll",
                    height: `${windowHeight}px`,
                    width: "100%"
                } }>
                <div className="inner" style={ { position: "relative", height: `${innerHeight}px` } }>
                    { renderItems(startIndex, endIndex) }
                </div>
            </div>
        </div>

    );
};

export default SimpleVirtualizedList;