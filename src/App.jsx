import './App.css';
import 'react-virtualized/styles.css';
import SimpleVirtualizedList from './component/SimpleVirtualizedList';
// import ContentVisibilityAutoList from './component/ContentVisibilityAutoList';
// import ReactVirtualizedList from './component/ReactVirtualizedList';
// import { useState, useEffect } from 'react';
import { useMovies } from './hooks/useMovies';

function App() {
  const initialPageNum = 1;
  const itemHeight = 80;
  const { items, loadNextPage, pageNum } = useMovies(initialPageNum);

  function renderItem(startIndex, endIndex) {
    const renderedItems = [];
    for (let i = startIndex; i <= endIndex; i++) {
      const item = items[i];
      renderedItems.push(
        <div key={ item.id } className="absolute w-full text-center border border-gray-500" style={ { top: `${i * itemHeight}px`, height: `${itemHeight}px`, lineHeight: `${itemHeight}px` } }>
          <div className="flex items-center text-ellipsis gap-2 pr-3">
            <img src={ `https://image.tmdb.org/t/p/original/${item.poster}` } className="w-16 h-20" />
            <p>{ item.title }</p>
            <p className="ml-auto">Release Date: { item.release_date }</p>
          </div>
        </div>
      );
    }
    return renderedItems;
  }

  return (
    <div className="w-4/5 flex justify-center p-10 flex-col">
      <h1 className="pb-6">List Virtualization</h1>
      <SimpleVirtualizedList itemCount={ items.length }
        itemHeight={ itemHeight }
        windowHeight={ 800 }
        renderItem={ renderItem }
        loadNextPage={ loadNextPage }
        pageNum={ pageNum }
      />
      {/* <ContentVisibilityAutoList items={ items } itemHeight={ itemHeight } windowHeight={ 500 } /> */ }
      {/* <ReactVirtualizedList items={ items } itemHeight={ itemHeight } windowHeight={ 500 } /> */ }
    </div>
  );
}

export default App;