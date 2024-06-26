import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

const queryClinet = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClinet}>
     
          <App />
     
       <Toaster/>
  </QueryClientProvider>
)
