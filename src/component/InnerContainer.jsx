const InnerContainer = ({ renderChildren, startIndex, endIndex, innerHeight }) => {
    return (
        <div className="relative" style={ { height: `${innerHeight}px` } }>
            { renderChildren(startIndex, endIndex) }
        </div>
    );
};

export default InnerContainer;