import React from 'react';
import useFetch from './useFetch';

export default function Reddit() {
  const {
    data: posts,
    isLoading,
    errorMessage,
  } = useFetch('https://www.reddit.com/r/aww.json');

  return (
    <div>
      <h2>Reddit API</h2>
      {isLoading && <div>Loading...</div>}
      {posts && (
        <ul>
          {posts.data.children.map(post => (
            <li key={post.data.id}>
              <a href={`https://reddit.com${post.data.permalink}`}>
                {post.data.title}
              </a>
            </li>
          ))}
        </ul>
      )}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
}
