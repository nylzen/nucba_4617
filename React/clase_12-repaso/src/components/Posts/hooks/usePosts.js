import { useEffect, useState } from "react";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    posts
  }
};

