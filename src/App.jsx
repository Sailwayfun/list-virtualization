import './App.css';
import 'react-virtualized/styles.css';
import SimpleVirtualizedList from './component/SimpleVirtualizedList';
// import ContentVisibilityAutoList from './component/ContentVisibilityAutoList';
// import ReactVirtualizedList from './component/ReactVirtualizedList';
// import { useState, useEffect } from 'react';
import { useRandomUsers } from './hooks/useRandomUsers';

function App() {
  // const [items, setItems] = useState([]);
  const ITEM_COUNT = 2000;///先寫死資料數為2000筆
  const itemHeight = 50;
  const [items] = useRandomUsers(ITEM_COUNT);

  // useEffect(() => {
  //   const newItems = new Array(ITEM_COUNT).fill(true).map((_, index) => {
  //     return {
  //       id: index,
  //       name: `Item ${index}`,
  //     };
  //   });///先寫死資料數為2000筆
  //   setItems(newItems);
  // }, []);

  function renderItem(startIndex, endIndex) {
    const renderedItems = [];
    for (let i = startIndex; i <= endIndex; i++) {
      const item = items[i];
      renderedItems.push(
        <div key={ item.id } className="flex gap-2 justify-center items-center" style={ { position: "absolute", top: `${i * itemHeight}px`, width: "100%", height: `${itemHeight}px`, lineHeight: `${itemHeight}px`, textAlign: "center", border: "1px solid #ccc" } }>
          <img src={ item.image } className="w-4 h-4" />
          <p>{ item.name }</p>
        </div>
      );
    }
    return renderedItems;
  }

  return (
    <>
      <h1>List Virtualization</h1>
      <SimpleVirtualizedList itemCount={ items.length }
        itemHeight={ itemHeight }
        windowHeight={ 500 }
        renderItem={ renderItem }
      />
      {/* <ContentVisibilityAutoList items={ items } itemHeight={ itemHeight } windowHeight={ 500 } /> */ }
      {/* <ReactVirtualizedList items={ items } itemHeight={ itemHeight } windowHeight={ 500 } /> */ }
    </>
  );
}

export default App;