import './App.css';
import SimpleVirtualizedList from './component/SimpleVirtualizedList';
import ContentVisibilityAutoList from './component/ContentVisibilityAutoList';
import { useState, useEffect } from 'react';
import NormalList from './component/NormalList';

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const itemHeight = 50;

  useEffect(() => {
    const getUsers = async () => {
      const url = `https://randomuser.me/api/?page=${page}&results=1000`;
      const response = await fetch(url);
      const data = await response.json();
      return data.results;
    };

    getUsers().then(newUsers => {
      const formattedUsers = newUsers.map((user, index) => {
        return {
          id: index,
          name: `${user.name.first} ${user.name.last}`,
          picture: user.picture.thumbnail,
        };
      });
      setUsers(prevUsers => [...prevUsers, ...formattedUsers]);
    });
  }, [page]);

  const loadMoreUsers = () => {
    setPage(prevPage => prevPage + 1);
  };

  function renderItems(startIndex, endIndex) {
    const allItems = [...users];
    const renderedItems = allItems.slice(startIndex, endIndex + 1).map((item, index) => {
      return (
        <div key={ item.id } style={ {
          position: "absolute",
          top: `${(index + startIndex) * itemHeight}px`,
          width: "100%", height: `${itemHeight}px`,
          lineHeight: `${itemHeight}px`,
          textAlign: "center",
          border: "1px solid #ccc",
          display: "flex",
          alignItems: "center",
        } }>
          <img src={ item.picture } alt="random" style={ { marginRight: "10px", width: "40px", height: "40px" } } />
          { item.name }
        </div>
      );
    });
    return renderedItems;
  }

  return (
    <>
      <h1>List Virtualization</h1>
      <div style={ { display: "grid", gap: "12px", gridTemplateColumns: "repeat(3, 1fr)" } }>
        <SimpleVirtualizedList itemCount={ users.length }
          itemHeight={ itemHeight }
          windowHeight={ 500 }
          renderItems={ renderItems }
        />
        <ContentVisibilityAutoList items={ users } itemHeight={ itemHeight } windowHeight={ 500 } />
        <NormalList items={ users } itemHeight={ itemHeight } />
      </div>
      <div style={ { display: "flex", gap: "10px", justifyContent: "center", paddingTop: "10px" } }>
        <button style={ { padding: "15px 30px" } } onClick={ () => loadMoreUsers() }>Load More Users</button>
      </div>
    </>
  );
}

export default App;
