import React from "react";
import { usePosts } from "./hooks/usePosts";
import { Card } from "../Card";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
};

export const Posts = () => {
  const { posts } = usePosts();
  return (
    <>
      <h1>Posts</h1>
      <div style={styles.container}>
        {posts.map((post) => (
          <Card key={post.id} title={post.title} description={post.body} />
        ))}
      </div>
    </>
  );
};
