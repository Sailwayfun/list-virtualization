import { useState, useEffect } from "react";

function getApiEndpoint(itemCount) {
    return `https://randomuser.me/api/?results=${itemCount}`;
}

function useRandomUsers(itemCount) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(getApiEndpoint(itemCount))
            .then((res) => res.json())
            .then((data) => {
                const newItems = data.results?.map((item, index) => {
                    return {
                        id: index,
                        name: `${item.name.first} ${item.name.last}`,
                        image: item.picture.thumbnail,
                    };
                });
                setItems(newItems);
            });
    }, [itemCount]);
    return [items, setItems];
}

export { useRandomUsers };