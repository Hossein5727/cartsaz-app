import SectionWrapper from "../hoc/SectionWrapper"
import { useUserDataStore } from "../store/userData"

const HomeShopPage = () => {

    const userData = useUserDataStore(state => state.userData)
    const newUserData = useUserDataStore(state => state.newUserData)

    return (
        <>
            <div className="px-4 py-5 border-b border-b-[#CBCBCB] lg:hidden">
                <h1 className="text-xl font-bold text-main-black">خانه</h1>
            </div>
            <section className="px-4 py-6">

                <h1 className="text-2xl font-semibold text-main-blue">فروشگاه {userData.shopName}</h1>
                <p className="text-main-black mt-2 text-lg font-normal">{userData.name} خوش آمدید!</p>
                <hr className="border-b border-b-[#CBCBCB] border-dashed mt-5" />

                <div className="w-full flex items-center justify-center gap-4 mt-7 h-14 lg:hidden">
                    <button className="btn bg-main-blue hover:bg-main-blue outline-none border-none text-white flex-[0.5] h-full">افزودن سبد خرید</button>
                    <button className="btn bg-main-black hover:bg-main-black outline-none border-none text-white flex-[0.5] h-full">ثبت خرید</button>
                </div>

                <div className="w-full flex flex-col lg:flex-row items-start lg:items-center gap-7 flex-wrap mt-7">

                    <div className="flex flex-1 lg:flex-[0.5] flex-col gap-4">
                        <h2 className="text-main-black text-xl font-bold flex items-center gap-2">
                            <div className="w-2 h-2 bg-transparent border-2 border-main-blue rounded-full shadow-ring-box-shadow" />
                            آخرین سبد خرید ها
                        </h2>
                    </div>

                    <div className="flex flex-1 lg:flex-[0.5] flex-col gap-4">
                        <h2 className="text-main-black text-xl font-bold flex items-center gap-2">
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