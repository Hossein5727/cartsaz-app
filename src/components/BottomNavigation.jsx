import { ReactComponent as HomeIcon } from "../assets/home-icon.svg"
import { ReactComponent as BasketCatrIcon } from "../assets/shopping-bag.svg"
import { ReactComponent as ProductsIcon } from "../assets/products.svg"
import { ReactComponent as ProfileIcon } from "../assets/profile.svg"

import { NavLink } from "react-router-dom"

const BottomNavigation = () => {
    return (
        <div className="w-full fixed bottom-0 px-6 text-xl bg-white border-t border-t-[#CBCBCB] flex lg:hidden justify-evenly items-center gap-4">

            <NavLink to={"/home/cart/home"} className={({ isActive }) => `flex flex-col gap-2 items-center ${isActive && "active-link"}`}>
                <div className="bg-main-blue h-[0] w-[70px] rounded-bl-lg rounded-br-lg  transition-all duration-150"></div>
                <HomeIcon className="stroke-main-black fill-main-black  w-8 h-9" />
                <h2>خانه</h2>
            </NavLink>

            <NavLink to={"/home/cart/basketcard"} className={({ isActive }) => `flex flex-col gap-2 items-center ${isActive && "active-link"}`}>
                <div className="bg-main-blue h-[0] w-[70px] rounded-bl-lg rounded-br-lg  transition-all duration-150"></div>
                <BasketCatrIcon className="stroke-main-black fill-main-black  w-8 h-9" />
                <h2>سبد خرید</h2>
            </NavLink>

            <NavLink to={"/home/cart/products"} className={({ isActive }) => `flex flex-col gap-2 items-center ${isActive && "active-link"}`}>
                <div className="bg-main-blue h-[0] w-[70px] rounded-bl-lg rounded-br-lg  transition-all duration-150"></div>
                <ProductsIcon className="stroke-main-black fill-main-black  w-8 h-9" />
                <h2>محصولات</h2>
            </NavLink>

            <NavLink to={"/home/cart/profile"} className={({ isActive }) => `flex flex-col gap-2 items-center ${isActive && "active-link"}`}>
                <div className="bg-main-blue h-[0] w-[70px] rounded-bl-lg rounded-br-lg  transition-all duration-150"></div>
                <ProfileIcon className="stroke-main-black fill-main-black  w-8 h-9" />
                <h2>پروفایل</h2>
            </NavLink>

        </div>
    )
}

export default BottomNavigation