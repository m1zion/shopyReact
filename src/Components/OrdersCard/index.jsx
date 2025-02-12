import { ChevronRightIcon } from '@heroicons/react/24/solid'
const OrdersCard = props =>{
    const { totalPrice, totalProducts} = props;
    return(
        <div className='flex justify-between items-center mb-3 border border-black w-80 p-4 rounded-lg'>
           <div className='flex justify-between w-full items-center'>
                <div className='flex flex-col'>
                    <span className='font-light'>01.02.25</span>
                    <span className='font-light'>{totalProducts} articles</span>

                </div>
                <div className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon 
                        className='size-6 text-black cursor-pointer'
                    />
                </div>
           </div>
        </div>
    );
}
export default OrdersCard;