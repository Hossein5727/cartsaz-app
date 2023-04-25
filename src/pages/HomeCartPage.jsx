import BottomNavigation from "../components/BottomNavigation"

import { Outlet } from "react-router-dom"

const HomeCartPage = () => {
    return (
        <>
            <div className="hidden lg:flex justify-between items-center py-5 px-4 border-b border-b-[#CBCBCB]">
                <p className="text-main-black font-bold">کارت ساز Cartsaz.com</p>

                <div className=" flex items-center justify-center gap-4 h-8">
                    <button className="btn bg-main-blue hover:bg-main-blue outline-none border-none text-white w-36 h-full">افزودن سبد خرید</button>
                    <button className="btn bg-main-black hover:bg-main-black outline-none border-none text-white w-36 h-full">ثبت خرید</button>
                </div>

            </div>

            <div className="relative w-full">
            <div className={`mb-[80px] `}>
                <Outlet />
            </div>
                <BottomNavigation />
            </div>
        </>
    )
}

export default HomeCartPage