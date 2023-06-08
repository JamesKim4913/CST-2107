import { useRoutes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  // React Router 
  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />
    },    
    {
      path: "*",
      element: <NotFoundPage />
    }
  ])

  return element;
}

export default App;
