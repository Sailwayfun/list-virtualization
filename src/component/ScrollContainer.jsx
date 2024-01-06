import { forwardRef } from "react";

const ScrollContainer = forwardRef(function scrollContainer({ renderItems, onScroll, windowHeight, children }, ref) {
    const containerHeight = `${windowHeight}px`;
    return (
        <div ref={ ref } onScroll={ onScroll } className="overflow-y-scroll" style={ { height: containerHeight } }>
            { children }
        </div>
    );
});

export default ScrollContainer;