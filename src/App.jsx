import { useState, useEffect } from 'react';
import BlogPosts from './components/BlogPosts.jsx';
import NewPost from './components/NewPost.jsx';
import blogLogoImg from './assets/blog-logo.jpg';
import NewPostsWithDebounce from "./components/NewPostsWithDebounce.jsx";

function App() {
  const [loadedPosts, setLoadedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 👈 new loading state
  const [error, setError] = useState(null); // optional: handle errors

  useEffect(() => {
    async function loadPosts() {
      setIsLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
          throw new Error('Failed to fetch posts.');
        }

        const blogPosts = await response.json();
        setLoadedPosts(blogPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false); // 👈 always turn off loading
      }
    }

    loadPosts();
  }, []);

  return (
      <>
        <header>
          <img src={blogLogoImg} alt="Pen & paper" />
          <h1>
            My <em>Effectful</em> Blog
          </h1>
        </header>

        {/*<NewPost />*/}
        <NewPostsWithDebounce />

        {isLoading && <p>Loading posts...</p>}  {/* 👈 show while loading */}
        {error && <p style={{ color: 'red' }}>{error}</p>}  {/* 👈 show error if any */}
        {!isLoading && !error && <BlogPosts posts={loadedPosts} />} {/* 👈 show posts when done */}
      </>
  );
}

export default App;
