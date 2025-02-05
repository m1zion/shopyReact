import { useState } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home/'
import MyAccount from '../MyAccount/'
import MyOrder from '../MyOrder/'
import MyOrders from '../MyOrders/'
import NotFound from '../NotFound/'
import SignIn from '../SignIn/'
import NavBar from '../../Components/NavBar/'
import './App.css'
const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/',  element: <Home/> },
    { path: '/my-account',  element: <MyAccount/> },
    { path: '/my-orded',  element: <MyOrder/> },
    { path: '/my-orders',  element: <MyOrders/> },
    { path: '/*',  element: <NotFound/> },
    { path: '/sign-in',  element: <SignIn/> },
  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <NavBar/>
      </BrowserRouter> 
    </ShoppingCartProvider>
  )
}

export default App
