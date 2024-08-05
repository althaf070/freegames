import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import GameDetails from './components/GameDetails.jsx'
import Notfound from './components/Notfound.jsx'
import Platform from './components/Platform.jsx'
import Favourites from './components/Favourites.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    errorElement:<Notfound/>
  },{
    path:'/gamedetails/:id',
    element:<GameDetails/>
  },
  {
    path:'/platform/:type',
    element:<Platform/>
  },
  {
    path:'/fav',
    element:<Favourites/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
