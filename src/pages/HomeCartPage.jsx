import BottomNavigation from "../components/BottomNavigation"

import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar";

const HomeCartPage = () => {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    return (
        <>
            <div className="hidden lg:flex justify-between items-center py-5 px-4 border-b border-b-[#CBCBCB]">
                <p className="text-main-black font-bold">کارت ساز Cartsaz.com</p>

                <div className=" flex items-center justify-center gap-4 h-8">
                    <button className="btn bg-main-blue hover:bg-main-blue outline-none border-none text-white w-36 h-full">افزودن سبد خرید</button>
                    <button className="btn bg-main-black hover:bg-main-black outline-none border-none text-white w-36 h-full">ثبت خرید</button>
                </div>

            </div>

            <div className="relative w-full lg:flex ">
                <Navbar />
                <div className={`mb-[80px] lg:mb-0 lg:flex-1`}>
                    <Outlet />
                </div>
            </div>
            <BottomNavigation />
        </>
    )
}

export default HomeCartPage