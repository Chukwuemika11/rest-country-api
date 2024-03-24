import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // Import Devtools
const queryClient = new QueryClient()
  // {
  // defaultOptions:
  // {queries: {staleTime: 60000, gcTime: 10 *(60 * 1000)}},});
  
// import 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <QueryClientProvider client={queryClient}>
                <App />
                <ReactQueryDevtools/>
</QueryClientProvider>
  </React.StrictMode>,
)
