import { List } from "react-virtualized";

const ReactVirtualizedList = ({ items, itemHeight, windowHeight }) => {
    function renderItem({ index, key, style }) {
        const item = items[index];
        return (
            <div key={ key } style={ style } className="row">
                { item.name }
            </div>
        );
    }

    return (
        <List
            width={ 500 }
            height={ windowHeight }
            rowCount={ items.length }
            rowHeight={ itemHeight }
            rowRenderer={ renderItem }
        />
    );
};

export default ReactVirtualizedList;