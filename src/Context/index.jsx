import { createContext, useState } from "react"
export const ShoppingCartContext = createContext();

export const ShoppingCartProvider  = ({children}) => {
    // Shopping Card quantity
    const [count,setCount]= useState(0);
    // Product Detail Open/Close
    const [isProductDetailOpen,setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    // Product Detail Shos product
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],  //Para evitar problema de que no lo encuentre
    });
    // Shopping Cart Add products to cart
    const [cartProducts,setCartProducts] = useState([]);
    // Checkout Side Menu Open/Close
    const [isCheckoutSideMenuOpen,setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Shopping cart . Order
    const [order,setOrder] = useState([]);


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>   
    )
}