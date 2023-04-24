import SectionWrapper from "../hoc/SectionWrapper"

const ProductsPage = () => {
  return (
    <>
      <div className="px-4 py-5 border-b border-b-[#CBCBCB] lg:hidden">
        <h1 className="text-lg font-bold text-main-black">محصولات</h1>
      </div>
    </>
  )
}

export default SectionWrapper(ProductsPage)