import AlertDelete from "../utils/AlertDelete"
import ProductComp from "../components/ProductComp"
import MenuMobile from "../components/MenuMobile"
import SectionWrapper from "../hoc/SectionWrapper"

import { dataProducts } from "../data/constants"
import { useShowMenuMobile } from "../store/isShowMenuBobile"
import box from '../assets/box.svg'
import bottomArrow from '../assets/bottom-arrow.svg'

import { useEffect, useState } from "react"
import { TbMenu2 } from "react-icons/tb"

const ProductsPage = () => {

  const [dataProduct, setDataProduct] = useState(dataProducts)
  const [isShowAlertDeleteProduct, setIsShowAlertDeleteProduct] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState()

  const isShowMenu = useShowMenuMobile(state => state.isShowMenu)
  const openMenu = useShowMenuMobile(state => state.openMenu)

  const deleteProduct = (data) => {
    setIsShowAlertDeleteProduct(true)
    setSelectedProduct(data)
  }

  const confirmDeleteProduct = () => {
    document.getElementById(`product-${selectedProduct?.id}`).classList.add("animate__fadeOut")
    setTimeout(() => {
      setDataProduct(oldValues => {
        return oldValues.filter(item => item.id !== selectedProduct?.id)
      })
    }, 300);
    setIsShowAlertDeleteProduct(false)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <section className={`${isShowMenu && "bg-[#c4c0c0] relative lg:bg-transparent"}`}>

      <div className="px-4 py-5 border-b flex items-center gap-2 border-b-[#CBCBCB] lg:hidden">
        <TbMenu2 size={24} onClick={openMenu} />
        <h1 className="text-lg font-bold text-main-black">محصولات</h1>
      </div>

      <section className="px-4 py-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataProduct.map(item => (
          <ProductComp
            imgSrc={item.img}
            productName={item.title}
            onDelete={() => deleteProduct(item)}
            id={`product-${item.id}`}
            key={item.id}
          />
        ))}
      </section>

      {dataProduct.length < 1 && (
        <div className="flex justify-start items-center flex-col gap-3 px-4 py-6 w-full h-[72vh] lg:hidden">
          <img src={box} />
          <div className="text-sm text-[#74787C]">  
            <p>هنوز محصولی وارد نکرده اید.</p>
            <p>اولین محصول خود را وارد کنید</p>
          </div>
          <img src={bottomArrow}  />
        </div>
      )}

      <button
        className="fixed bottom-[100px] left-[50%] translate-x-[-50%] z-[2] btn animate-none bg-main-blue  hover:bg-main-blue active:hover:translate-x-[-50%] border-none outline-none font-medium w-[85vw] lg:hidden"
      >
        افزودن محصول
      </button>

      <MenuMobile />
      {isShowAlertDeleteProduct && (
        <AlertDelete
          isShowModal={isShowAlertDeleteProduct}
          closeModal={() => setIsShowAlertDeleteProduct(false)}
          deleteProduct={() => confirmDeleteProduct()}
        />
      )}
    </section>
  )
}

export default SectionWrapper(ProductsPage)