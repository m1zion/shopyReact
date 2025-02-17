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
//Lo importamos aqui en APP y no en Home porque lo usaremos en diferentes partes de la APP
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'

const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/',  element: <Home/> },
    { path: '/:category',  element: <Home/> },
    { path: '/my-account',  element: <MyAccount/> },
    { path: '/my-order',  element: <MyOrder/> },
    { path: '/my-orders',  element: <MyOrders/> },
    { path: '/my-orders/last',  element: <MyOrder/> },
    { path: '/my-orders/:id',  element: <MyOrder/> },
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
        <CheckoutSideMenu/>
      </BrowserRouter> 
    </ShoppingCartProvider>
  )
}

export default App
