import ProductOfBasketCard from "../components/ProductOfBasketCard"
import SectionWrapper from "../hoc/SectionWrapper"
import { useUserDataStore } from "../store/userData"

const HomeShopPage = () => {

    const userData = useUserDataStore(state => state.userData)
    const newUserData = useUserDataStore(state => state.newUserData)

    return (
        <>
            <div className="px-4 py-5 border-b border-b-[#CBCBCB] lg:hidden">
                <h1 className="text-lg font-bold text-main-black">خانه</h1>
            </div>
            <section className="px-4 py-6">

                <h1 className="text-xl font-semibold text-main-blue">فروشگاه {userData.shopName}</h1>
                <p className="text-main-black mt-2 text-base font-normal">{userData.name} خوش اومدی!</p>
                <hr className="border-b border-b-[#CBCBCB] border-dashed mt-5" />

                <div className="w-full flex items-center justify-center gap-4 mt-7 md:h-14 h-8 lg:hidden">
                    <button className="btn bg-main-blue hover:bg-main-blue font-normal outline-none border-none text-white flex-[0.5] h-full">افزودن سبد خرید</button>
                    <button className="btn bg-main-black hover:bg-main-black font-normal outline-none border-none text-white flex-[0.5] h-full">ثبت خرید</button>
                </div>

                <div className="w-full flex flex-col lg:flex-row items-start lg:items-center gap-7 flex-wrap mt-7">

                    <div className="flex lg:flex-[0.5] flex-1 w-full lg:w-auto flex-col gap-4">
                        <h2 className="text-main-black text-base font-bold flex items-center gap-2">
                            <div className="w-2 h-2 bg-transparent border-2 border-main-blue rounded-full shadow-ring-box-shadow" />
                            آخرین سبد خرید ها
                        </h2>

                        <ProductOfBasketCard statusProductProps={0} />
                        <ProductOfBasketCard statusProductProps={1} />
                        <ProductOfBasketCard statusProductProps={2} />

                    </div>

                    <div className="flex lg:flex-[0.5] flex-1 w-full lg:w-auto flex-col gap-4">
                        <h2 className="text-main-black text-base font-bold flex items-center gap-2">
                            <div className="w-2 h-2 bg-transparent border-2 border-main-blue rounded-full shadow-ring-box-shadow" />
                            آخرین محصولات
                        </h2>
                        
                    </div>

                </div>
            </section>
        </>
    )
}

export default SectionWrapper(HomeShopPage)