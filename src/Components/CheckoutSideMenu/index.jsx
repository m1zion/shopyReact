import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { totalPrice } from '../../Utils'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
    }
    const handleCheckout = (id) => {
      const orderToAdd = { 
        date: '01.02.25',
        products: context.cartProducts,
        totalProducts: context.cartProducts.length,
        totalPrice: totalPrice(context.cartProducts)
       };
       context.setOrder([...context.order, orderToAdd]);
       context.setCartProducts([]); //limpiamos la orden
    }
    return (
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed bg-white right-0 border border-black rounded-lg `}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Mi Orden</h2>
                <div>
                    <XMarkIcon 
                    className='size-6 text-black cursor-pointer'
                    onClick={context.closeCheckoutSideMenu}
                    />
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
            context.cartProducts.map(product => (
                <OrderCard 
                    id={product.id}
                    title={product.title} 
                    imageUrl={product.images[0]}
                    price={product.price}
                    key={product.id}
                    handleDelete={handleDelete}
                />
            ))
            }
            </div>
            <div className='px-6 mt-2 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light text-xl'>Total</span>
                    <span className='font-medium text-xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button 
                    className='w-full bg-black py-3 text-white rounded-lg'
                    onClick={() => handleCheckout()}>Checkout
                    </button>
                </Link>
                
            </div>
           
        </aside>
    );
}
export default CheckoutSideMenu