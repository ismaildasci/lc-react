import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Root from './components/Root';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const root = document.getElementById('root');
const queryClient = new QueryClient();
createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Root />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
