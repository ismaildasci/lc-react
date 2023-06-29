import React, { useState } from 'react';
import Reddit from '../api/Reddit';
import Joke from '../api/Joke';

export default function About() {
  const [redditVisible, setRedditVisible] = useState(false);
  const [jokeVisible, setJokeVisible] = useState(false);

  return (
    <div>
      <div className="buttons">
        <button
          className="api-button"
          onClick={() => setRedditVisible(!redditVisible)}
        >
          Show Reddit Content
        </button>
        <button
          className="api-button"
          onClick={() => setJokeVisible(!jokeVisible)}
        >
          Show Joke Content
        </button>
      </div>
      <div className="content">
        {redditVisible && (
          <div className="reddit-content">
            <Reddit />
          </div>
        )}
        {jokeVisible && (
          <div className="joke-content">
            <Joke />
          </div>
        )}
      </div>
    </div>
  );
}
