import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);
