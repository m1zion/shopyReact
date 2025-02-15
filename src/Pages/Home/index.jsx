import React, {useContext} from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail';

function Home() {  
  const context = useContext(ShoppingCartContext);
  const renderView = () =>{
    if(context.searchByTitle?.length > 0){
      if(context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map((item) => (
            <Card key={item.id} data={item}/>
            )
          )
        );
      }
    }
    else {
      return (
        context.items?.map((item) => (
          <Card key={item.id} data={item}/>
        )
        )
      );
    }
  }
  return (
      <Layout>
        <div className=' flex items-center justify-center relative w-80 mb-8'>          
          <h1 className='font-medium text-xl'>Bienvendio a Shoppyreact</h1>
        </div>
        <input 
          type="text" 
          placeholder='Search Product'
          className='border border-black rounded-lg p-3 mb-5 w-80 focus:outline-none'
          onChange={(event) => context.setSearchByTitle(event.target.value)}
        />
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
        </div>
        <ProductDetail/>
      </Layout>
   
  )
}
export default Home
