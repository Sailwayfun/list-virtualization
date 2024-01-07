import './App.css';
import SimpleVirtualizedList from './component/SimpleVirtualizedList';
import ContentVisibilityAutoList from './component/ContentVisibilityAutoList';
import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const ITEM_COUNT = 2000;
  const itemHeight = 50;

  useEffect(() => {
    const newItems = new Array(ITEM_COUNT).fill(true).map((_, index) => {
      return {
        id: index,
        name: `Item ${index}`,
      };
    });
    setItems(newItems);
  }, []);

  function renderItems(startIndex, endIndex) {
    const allItems = [...items];
    const renderedItems = allItems.slice(startIndex, endIndex + 1).map((item, index) => {
      return (
        <div key={ item.id } style={ {
          position: "absolute",
          top: `${(index + startIndex) * itemHeight}px`,
          width: "100%", height: `${itemHeight}px`,
          lineHeight: `${itemHeight}px`,
          textAlign: "center",
          border: "1px solid #ccc"
        } }>
          { item.name }
        </div>
      );
    });
    return renderedItems;
  }

  return (
    <>
      <h1>List Virtualization</h1>
      <div style={ { display: "flex", gap: "12px" } }>
        <SimpleVirtualizedList itemCount={ items.length }
          itemHeight={ itemHeight }
          windowHeight={ 500 }
          renderItems={ renderItems }
        />
        <ContentVisibilityAutoList items={ items } itemHeight={ itemHeight } windowHeight={ 500 } />
      </div>

    </>
  );
}

export default App;
