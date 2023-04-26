import { useEffect } from "react"
import BasketCardComp from "../components/BasketCardComp"
import MenuMobile from "../components/MenuMobile"
import TabSectionBasketCard from "../components/TabSectionBasketCard"
import SectionWrapper from "../hoc/SectionWrapper"

import { useShowMenuMobile } from "../store/isShowMenuBobile"

import { TbMenu2 } from "react-icons/tb"

const BasketCardPage = () => {

  const isShowMenu = useShowMenuMobile(state => state.isShowMenu)
  const openMenu = useShowMenuMobile(state => state.openMenu)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <section className={`${isShowMenu && "bg-[#c4c0c0] relative lg:bg-transparent"}`}>

      <div className="px-4 py-5 border-b flex items-center gap-2 border-b-[#CBCBCB] lg:hidden">
        <TbMenu2 size={24} onClick={openMenu} />
        <h1 className="text-lg font-bold text-main-black">سبد خرید ها</h1>
      </div>

      <TabSectionBasketCard />

      <section className="px-4 py-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BasketCardComp buyerName={"محمدرضا علوی"} statusBasketCardProps={1} />
        <BasketCardComp buyerName={"حسین غیاثی"} statusBasketCardProps={2} />
        <BasketCardComp buyerName={"بی نام"} statusBasketCardProps={0} />
        <BasketCardComp buyerName={"محمدرضا علوی"} statusBasketCardProps={2} />
        <BasketCardComp buyerName={"محمدرضا علوی"} statusBasketCardProps={1} />
      </section>

      <button
        className="fixed bottom-[100px] left-[50%] translate-x-[-50%] z-[2]  btn  animate-none bg-main-blue  hover:bg-main-blue border-none outline-none font-medium w-[85vw] lg:hidden"
      >
        افزودن سبد خرید
      </button>

      <MenuMobile />
    </section>
  )
}

export default SectionWrapper(BasketCardPage)