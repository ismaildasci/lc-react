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
          className="button"
          onClick={() => setRedditVisible(prevRedditVisible => !redditVisible)}
        >
          Toggle Reddit
        </button>
        <button
          className="button"
          onClick={() => setJokeVisible(prevJokeVisible => !jokeVisible)}
        >
          Toggle Reddit
        </button>
      </div>
      {redditVisible && <Reddit />}
      {jokeVisible && <Joke />}
    </div>
  );
}
