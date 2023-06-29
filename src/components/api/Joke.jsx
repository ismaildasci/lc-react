import React from 'react';
import { useQuery } from 'react-query';

export default function Joke() {
  const {
    data: joke,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery('joke', fetchJoke, {
    // staleTime: 6000,
    refetchOnWindowFocus: false,
  });

  function fetchJoke() {
    return fetch('https://official-joke-api.appspot.com/jokes/random').then(
      response => response.json()
    );
  }

  // const {
  //   data: joke,
  //   isLoading,
  //   errorMessage,
  // } = useFetch('https://official-joke-api.appspot.com/jokes/random');

  return (
    <div>
      <h2>Joke API</h2>
      {isLoading && <div>Loading...</div>}
      {isSuccess && <div>{joke.setup + ' ' + joke.punchline}</div>}
      {isError && <div>{error.message}</div>}
    </div>
  );
}
