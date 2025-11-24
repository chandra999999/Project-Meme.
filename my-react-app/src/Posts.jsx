import React from 'react'
import { useState,useEffect } from 'react'
export const Posts = () => {
    const [posts,setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

 useEffect(() => {
  const fetchPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.log("Error fetching posts:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  setTimeout(() => {
    fetchPosts();
  }, 3000); // 👈 Delay to show loading
}, []);

if(loading)  return <div>Loading...</div>
if(error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts;