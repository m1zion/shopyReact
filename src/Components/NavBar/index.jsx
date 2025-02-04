import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
const NavBar = () =>{
    const context = useContext(ShoppingCartContext);
    const activeStyle = "underline underline-offset-3";
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={  ({isActive}) =>
                            isActive ? activeStyle : undefined
                           }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className={  ({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={  ({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furniture'
                        className={  ({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/shoes'
                        className={  ({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        className={  ({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>


            <ul className="flex item-center gap-3">
                <li className="text-black/60">
                    misael@gmail.com                  
                </li>
                <li>
                    <NavLink
                        to='/my-orders'>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furniture'>
                        ╚ {context.count}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar