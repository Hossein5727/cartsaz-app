import MenuMobile from "../components/MenuMobile"
import TabSectionBasketCard from "../components/TabSectionBasketCard"
import SectionWrapper from "../hoc/SectionWrapper"

import { useShowMenuMobile } from "../store/isShowMenuBobile"

import { TbMenu2 } from "react-icons/tb"

const BasketCardPage = () => {

  const isShowMenu = useShowMenuMobile(state => state.isShowMenu)
  const openMenu = useShowMenuMobile(state => state.openMenu)

  return (
    <section className={`${isShowMenu && "bg-[#c4c0c0] lg:bg-transparent"}`}>

      <div className="px-4 py-5 border-b flex items-center gap-2 border-b-[#CBCBCB] lg:hidden">
        <TbMenu2 size={24} onClick={openMenu} />
        <h1 className="text-lg font-bold text-main-black">سبد خرید ها</h1>
      </div>

      <TabSectionBasketCard/>
      <section className="px-4 py-6 w-full">
      </section>

      <MenuMobile />
    </section>
  )
}

export default SectionWrapper(BasketCardPage)