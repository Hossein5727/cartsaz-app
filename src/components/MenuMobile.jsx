import { ReactComponent as HomeIcon } from "../assets/home-icon.svg"
import { ReactComponent as BasketCatrIcon } from "../assets/shopping-bag.svg"
import { ReactComponent as ProductsIcon } from "../assets/products.svg"
import { ReactComponent as ProfileIcon } from "../assets/profile.svg"

import { useUserDataStore } from "../store/userData"

import { NavLink } from "react-router-dom"
import { IoClose } from "react-icons/io5"
import { useShowMenuMobile } from "../store/isShowMenuBobile"

const MenuMobile = () => {

    const userData = useUserDataStore(state => state.userData)
    const isShowMenu = useShowMenuMobile(state => state.isShowMenu)
    const closeMenu = useShowMenuMobile(state => state.closeMenu)


    return (
        <div className={`absolute top-0 w-[300px] menu-mobile bg-white transition-all duration-150 lg:hidden ${!isShowMenu ? "-right-96 transition-all duration-150" : "right-0  transition-all duration-150 z-[5]"}`}>
            <div className="px-5 py-5">

                <IoClose
                    onClick={closeMenu}
                    size={28}
                    className="mb-5"
                />

                <h1 className="text-xl font-semibold  text-main-blue">فروشگاه {userData.shopName}</h1>

                <div className="flex flex-col gap-1 mt-3">
                    <p className="text-main-black text-base font-normal">{userData.name}</p>
                    <p className="text-[#74787C] text-sm font-normal">{userData.phoneNumber}</p>
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 w-full">
                <NavLink to="/home/cart/home" className={({ isActive }) => `text-base font-semibold flex items-center gap-2 w-full px-2 py-4 border-t border-t-[#EDEDED] border-b border-b-[#EDEDED] ${isActive && "active-link"}`}>
                    <HomeIcon className="stroke-main-black fill-main-black  w-6 h-6" />
                    <p>ویترین فروشگاه</p>
                </NavLink>

                <NavLink to="/home/cart/products" className={({ isActive }) => `text-base font-semibold flex items-center gap-2 w-full px-2 py-4 border-b border-b-[#EDEDED] ${isActive && "active-link"}`}>
                    <ProductsIcon className="stroke-main-black fill-main-black  w-6 h-6" />
                    <p>محصولات</p>
                </NavLink>

                <NavLink to="/home/cart/basketcard" className={({ isActive }) => `text-base font-semibold flex items-center gap-2 w-full px-2 py-4 border-b border-b-[#EDEDED] ${isActive && "active-link"}`}>
                    <BasketCatrIcon className="stroke-main-black fill-main-black  w-6 h-6" />
                    <p>سبد خرید ها</p>
                </NavLink>

                <NavLink to="/home/cart/profile" className={({ isActive }) => `text-base font-semibold flex items-center gap-2 w-full px-2 py-4 border-b border-b-[#EDEDED] ${isActive && "active-link"}`}>
                    <ProfileIcon className="stroke-main-black fill-main-black  w-6 h-6" />
                    <p>پروفایل کاربری</p>
                </NavLink>
            </div>

            <div className="absolute bottom-0 right-0 flex flex-col gap-3 w-full">
                <p className={`text-base font-semibold  w-full px-2 py-2 border-b border-b-[#EDEDED]`}>سوالات متداول</p>
                <p className={`text-base font-semibold  w-full px-2 py-2 border-b border-b-[#EDEDED]`}>تماس با ما</p>
                <p className={`text-base font-semibold  w-full px-2 py-2 text-[#C30000]`}>سوالات متداول</p>
            </div>

        </div>
    )
}

export default MenuMobile