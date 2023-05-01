import { TbMenu2 } from "react-icons/tb"

import MenuMobile from "../components/MenuMobile"
import SectionWrapper from "../hoc/SectionWrapper"

import { useShowMenuMobile } from "../store/isShowMenuBobile"
import { useUserDataStore } from "../store/userData"

const ProfilePage = () => {

  const userData = useUserDataStore(state => state.userData)

  const isShowMenu = useShowMenuMobile(state => state.isShowMenu)
  const openMenu = useShowMenuMobile(state => state.openMenu)

  return (
    <section className={`${isShowMenu && "bg-[#c4c0c0] lg:bg-transparent"} h-screen`}>
      <div className="px-4 py-5 border-b flex items-center gap-2 border-b-[#CBCBCB] lg:hidden">
        <TbMenu2 size={24} onClick={openMenu} />
        <h1 className="text-lg font-bold text-main-black">پروفایل</h1>
      </div>

      <section className="px-6 py-6 w-full">
        <div className="w-full flex justify-between items-center flex-wrap gap-5 pb-4 border-b border-b-[#CBCBCB]">
          <p className="text-[#74787C] text-sm">
            نام شما
            <br />
            <h4 className="text-main-black text-base mt-1">{userData?.name}</h4>
          </p>

          <p className="text-[#74787C] text-sm ">
            شماره تماس
            <br />
            <h4 className="text-main-black text-base mt-1">{userData?.phoneNumber}</h4>
          </p>

          <p className="text-[#74787C] text-sm">
          ایمیل (اختیاری)
            <br />
            <h4 className="text-main-black text-base mt-1">{userData.email?userData.email:"---"}</h4>
          </p>
        </div>

        <div className="w-full flex justify-between items-center flex-wrap gap-5 pb-4 mt-6 border-b border-b-[#CBCBCB]">
          <p className="text-[#74787C] text-sm">
            نام فروشگاه
            <br />
            <h4 className="text-main-black text-base mt-1">{userData?.shopName}</h4>
          </p>

          <p className="text-[#74787C] text-sm ">
          آدرس فروشگاه
            <br />
            <h4 className="text-main-black text-base mt-1">instagram.com/{userData?.instagram} </h4>
          </p>

          <p className="text-[#74787C] text-sm">
          حوزه فروشگاه
            <br />
            <h4 className="text-main-black text-base mt-1">{userData?.activityType}</h4>
          </p>
        </div>

        <div className="w-full flex justify-between items-center flex-wrap gap-5 mt-6 pb-4 border-b border-b-[#CBCBCB]">
          <p className="text-[#74787C] text-sm">
            آدرس فرستنده (اختیاری)
            <br />
            <h4 className="text-main-black text-base mt-1">{userData.address?userDaa.address:"---"}</h4>
          </p>

          <p className="text-[#74787C] text-sm">
          کد پستی فرستنده (اختیاری)
            <br />
            <h4 className="text-main-black text-base mt-1">{userData.postalCode?userData.postalCode:"---"}</h4>
          </p>
        </div>
        
      </section>

      <button
        className="fixed bottom-[100px] left-[50%] translate-x-[-50%] z-[2] btn animate-none bg-main-black  hover:bg-main-black active:hover:translate-x-[-50%] border-none outline-none font-medium w-[85vw] lg:hidden"
      >
        ویرایش پروفایل
      </button>

      <MenuMobile />
    </section>
  )
}

export default SectionWrapper(ProfilePage)