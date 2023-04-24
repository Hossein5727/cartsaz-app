import { ReactComponent as HomeIcon } from "../assets/home-icon.svg"
import { ReactComponent as BasketCatrIcon } from "../assets/shopping-bag.svg"
import { ReactComponent as ProductsIcon } from "../assets/products.svg"
import { ReactComponent as ProfileIcon } from "../assets/profile.svg"

import { NavLink } from "react-router-dom"

const BottomNavigation = () => {
    return (
        <div className="w-full h-[80px] fixed bottom-0 px-6 text-xl bg-white border-t border-t-[#CBCBCB] flex lg:hidden justify-evenly items-center gap-4">

            <NavLink to={"/home/cart/home"} className={({ isActive }) => `flex flex-col gap-2 items-center ${isActive && "active-link"}`}>
                <div className="bg-main-blue h-[0] w-[60px] rounded-bl-lg rounded-br-lg  transition-all duration-150"></div>
                <HomeIcon className="stroke-main-black fill-main-black  w-7 h-7" />
                <h2 className="text-base">خانه</h2>
            </NavLink>

            <NavLink to={"/home/cart/basketcard"} className={({ isActive }) => `flex flex-col gap-2 items-center ${isActive && "active-link"}`}>
                <div className="bg-main-blue h-[0] w-[60px] rounded-bl-lg rounded-br-lg  transition-all duration-150"></div>
                <BasketCatrIcon className="stroke-main-black fill-main-black  w-7 h-7" />
                <h2 className="text-base">سبد خرید</h2>
            </NavLink>

            <NavLink to={"/home/cart/products"} className={({ isActive }) => `flex flex-col gap-2 items-center ${isActive && "active-link"}`}>
                <div className="bg-main-blue h-[0] w-[60px] rounded-bl-lg rounded-br-lg  transition-all duration-150"></div>
                <ProductsIcon className="stroke-main-black fill-main-black  w-7 h-7" />
                <h2 className="text-base">محصولات</h2>
            </NavLink>

            <NavLink to={"/home/cart/profile"} className={({ isActive }) => `flex flex-col gap-2 items-center ${isActive && "active-link"}`}>
                <div className="bg-main-blue h-[0] w-[60px] rounded-bl-lg rounded-br-lg  transition-all duration-150"></div>
                <ProfileIcon className="stroke-main-black fill-main-black  w-7 h-7" />
                <h2 className="text-base">پروفایل</h2>
            </NavLink>

        </div>
    )
}

export default BottomNavigation