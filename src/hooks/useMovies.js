import { useState, useEffect } from "react";

function getApiEndpoint(pageNum) {
    return `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNum}`;
}

function useMovies(initialPageNum) {
    const [items, setItems] = useState([]);
    const [pageNum, setPageNum] = useState(initialPageNum);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmM3NjgzYzEzNjMxZTI0OWFkYjk1ZjNhYTRjNWI1ZSIsInN1YiI6IjY1OTY2MjE1NTkwN2RlMDNlOTYzYzRmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EI99epFDLmJRWLCp74mdUmVk-qF0WjInUSj14JltToc'
            }
        };
        fetch(getApiEndpoint(pageNum), options)
            .then((res) => res.json())
            .then((data) => {
                const newItems = data.results?.map((item) => {
                    return {
                        id: item.id,
                        title: item.original_title,
                        poster: item.poster_path,
                        overview: item.overview,
                        release_date: item.release_date,
                    };
                });
                setItems(newItems);
            });
    }, [pageNum]);
    const loadNextPage = (scrollContainerRef) => {
        if (isLoading) return;
        setIsLoading(true);
        setPageNum((prev) => prev + 1);
        if (scrollContainerRef) {
            scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight - 100;
        }
        setIsLoading(false);
    };
    return { items, setItems, loadNextPage, pageNum };
}

export { useMovies };