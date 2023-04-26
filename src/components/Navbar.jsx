import { ReactComponent as HomeIcon } from "../assets/home-icon.svg"
import { ReactComponent as BasketCatrIcon } from "../assets/shopping-bag.svg"
import { ReactComponent as ProductsIcon } from "../assets/products.svg"
import { ReactComponent as ProfileIcon } from "../assets/profile.svg"

import SectionWrapper from "../hoc/SectionWrapper"

import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="hidden lg:flex h-auto pl-14 py-4 mt-7 mr-4 rounded-lg border border-[#CBCBCB] flex-col gap-4">
            <NavLink to={"/home/cart/home"} className={({ isActive }) => `flex  gap-2 items-center ${isActive && "active-link-nav"}`}>
                <div className="bg-main-blue h-[25px] w-0 rounded-tl-md rounded-bl-md ml-2 transition-all duration-150" />
                <HomeIcon className="stroke-main-black fill-main-black  w-6 h-5" />
                <h2 className="text-base">خانه</h2>
            </NavLink>

            <NavLink to={"/home/cart/basketcard"} className={({ isActive }) => `flex gap-2 items-center ${isActive && "active-link-nav"}`}>
                <div className="bg-main-blue h-[25px] w-0 rounded-tl-md rounded-bl-md ml-2 transition-all duration-150" />
                <BasketCatrIcon className="stroke-main-black fill-main-black  w-6 h-5" />
                <h2 className="text-base">سبد خرید</h2>
            </NavLink>

            <NavLink to={"/home/cart/products"} className={({ isActive }) => `flex gap-2 items-center ${isActive && "active-link-nav"}`}>
                <div className="bg-main-blue h-[25px] w-0 rounded-tl-md rounded-bl-md ml-2 transition-all duration-150" />
                <ProductsIcon className="stroke-main-black fill-main-black  w-6 h-5" />
                <h2 className="text-base">محصولات</h2>
            </NavLink>

            <NavLink to={"/home/cart/profile"} className={({ isActive }) => `flex gap-2 items-center ${isActive && "active-link-nav"}`}>
                <div className="bg-main-blue h-[25px] w-0 rounded-tl-md rounded-bl-md ml-2 transition-all duration-150" />
                <ProfileIcon className="stroke-main-black fill-main-black  w-6 h-5" />
                <h2 className="text-base">پروفایل</h2>
            </NavLink>
        </nav>
    )
}

export default SectionWrapper(Navbar)