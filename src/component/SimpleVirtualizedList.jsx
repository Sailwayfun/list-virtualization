import { useState, useMemo, useRef } from 'react';


const SimpleVirtualizedList = ({ itemCount, itemHeight, windowHeight, renderItems, loadNextPage, pageNum }) => {
    const [scrollTop, setScrollTop] = useState(0);
    const scrollContainerRef = useRef(null);
    function handleScroll(e) {
        setScrollTop(e.target.scrollTop);
        const PAGE_COUNT = 168;
        const hasMoreData = pageNum < PAGE_COUNT;
        const hasMoreItem = e.target.scrollTop + windowHeight >= itemHeight * itemCount;
        if (hasMoreItem && hasMoreData) {
            loadNextPage(scrollContainerRef);
        }
    }
    const innerHeight = useMemo(() => itemCount * itemHeight, [itemCount, itemHeight]);
    const startIndex = Math.floor(scrollTop / itemHeight);//window上方的高度除以每個item的高度，得到的數字就是目前在window上方的item數量
    const endIndex = Math.min(itemCount - 1, Math.floor((scrollTop + windowHeight) / itemHeight));//如果整個list的item數量比目前在window上方的item數量還少，就直接渲染整個list，否則就渲染到window上方的item數+window可視範圍內的item數（如window上方有10個，window可容納10個，就渲染20個）
    return (
        <div ref={ scrollContainerRef } onScroll={ handleScroll } className="scroll" style={ { overflowY: "scroll", height: `${windowHeight}px` } }>
            <div className="inner" style={ { position: "relative", height: `${innerHeight}px` } }>
                { renderItems(startIndex, endIndex) }
            </div>
        </div>
    );
};

export default SimpleVirtualizedList;