import React, { useState } from 'react';
import Reddit from './Reddit';
import Joke from './Joke';

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
