import { useContext } from "react";
import { ShoppingCartContext } from '../../Context'
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard";
function MyOrder() {
    const context = useContext(ShoppingCartContext);
    return (
        <Layout>
            MyOrder
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                context.order?.slice(-1)[0].products.map(product => (  //Aqui me va a traer el ultimo elemento
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
  