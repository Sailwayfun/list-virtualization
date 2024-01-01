import './App.css';
// import SimpleVirtualizedList from './component/SimpleVirtualizedList';
import ContentVisibilityAutoList from './component/ContentVisibilityAutoList';
import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const ITEM_COUNT = 2000;///先寫死資料數為2000筆
  const itemHeight = 50;

  useEffect(() => {
    const newItems = new Array(ITEM_COUNT).fill(true).map((_, index) => {
      return {
        id: index,
        name: `Item ${index}`,
      };
    });///先寫死資料數為2000筆
    setItems(newItems);
  }, []);

  // function renderItem(startIndex, endIndex) {
  //   const renderedItems = [];
  //   for (let i = startIndex; i <= endIndex; i++) {
  //     const item = items[i];
  //     renderedItems.push(
  //       <div key={ item.id } style={ { position: "absolute", top: `${i * itemHeight}px`, width: "100%", height: `${itemHeight}px`, lineHeight: `${itemHeight}px`, textAlign: "center", border: "1px solid #ccc" } }>
  //         { item.name }
  //       </div>
  //     );
  //   }
  //   return renderedItems;
  // }

  return (
    <>
      <h1>List Virtualization</h1>
      {/* <SimpleVirtualizedList itemCount={ items.length }
        itemHeight={ itemHeight }
        windowHeight={ 500 }
        renderItem={ renderItem }
      /> */}
      <ContentVisibilityAutoList items={ items } itemHeight={ itemHeight } windowHeight={ 500 } />
    </>
  );
}

export default App;
