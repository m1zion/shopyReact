import { useContext } from "react";
import { ShoppingCartContext } from '../../Context'
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom'
function MyOrder() {
    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/')+1);
    if (index === 'last'){
        index = context.order?.length - 1;
    }
    return (
        <Layout>
            <div className='relative justify-center flex items-center w-80 mb-6'>
                <Link
                to='/my-orders'
                className='absolute left-0'>
                    <ChevronLeftIcon 
                        className='size-6 text-black cursor-pointer'
                        onClick={context.closeCheckoutSideMenu}
                    />
                </Link>
                <h1>My Order</h1>
            </div> 
            <div className='flex flex-col w-110'>
                {
                context.order?.[index]?.products?.map(product => (  //Aqui me va a traer el ultimo elemento
                    <OrderCard 
                        id={product.id}
                        title={product.title} 
                        imageUrl={product.images[0]}
                        price={product.price}
                        key={product.id}
                    />
                ))
                }
            </div>
        </Layout>
    )
  }
  export default MyOrder
  