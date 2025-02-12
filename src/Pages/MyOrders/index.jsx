import { useContext } from 'react'
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from '../../Context';
import OrdersCard from "../../Components/OrdersCard"
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
function MyOrders() {
    const context = useContext(ShoppingCartContext);
    return (
        <Layout>
            <div className='relative justify-center flex items-center w-80'>
                <h1>My Orders</h1>
            </div>            
            {
                context.order.map((order,index) =>(
                    <Link 
                    key={index}
                    to={`/my-orders/${index}`}
                    >
                        <OrdersCard                        
                        totalPrice={order.totalPrice}
                        totalProduct={order.totalProducts}
                        />
                    </Link>
                )
                )
            }
        </Layout>
    )
  }
  export default MyOrders
  