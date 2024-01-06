import { useState, useMemo } from 'react';


const SimpleVirtualizedList = ({ itemCount, itemHeight, windowHeight, renderItems }) => {
    const [scrollTop, setScrollTop] = useState(0);
    function handleScroll(e) {
        setScrollTop(e.target.scrollTop);
    }
    const innerHeight = useMemo(() => itemCount * itemHeight, [itemCount, itemHeight]);
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(itemCount - 1, Math.floor((scrollTop + windowHeight) / itemHeight));
    return (
        <div onScroll={ handleScroll } className="scroll" style={ { overflowY: "scroll", height: `${windowHeight}px` } }>
            <div className="inner" style={ { position: "relative", height: `${innerHeight}px` } }>
                { renderItems(startIndex, endIndex) }
            </div>
        </div>
    );
};

export default SimpleVirtualizedList;