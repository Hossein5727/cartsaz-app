import productImg1 from '../assets/productsBasketCard/p-1.png'
import productImg2 from '../assets/productsBasketCard/p-2.png'
import productImg3 from '../assets/productsBasketCard/p-3.png'
import productImg4 from '../assets/productsBasketCard/p-4.png'
import productImg5 from '../assets/productsBasketCard/p-5.png'

const BasketCardComp = ({ statusBasketCardProps,buyerName }) => {

    const pendingStatusBasketCardClassName = " p-1 text-xs text-center border rounded-2xl border-[#A9791C] bg-[#FFF8E1] text-[#A9791C]";
    const successStatusBasketCardClassName = " p-1 text-xs text-center border rounded-2xl border-[#00BA88] bg-[#F3FDFA] text-[#00966D]";
    const errorStatusBasketCardClassName = " p-1 text-xs text-center border rounded-2xl border-[#ED2E2E] bg-[#FFF2F2] text-[#C30000]";

    const statusProduct = ["منتظر تکمیل", "آماده ارسال ", "لغو شده"]


    return (
        <section className="w-full flex flex-col  items-center border border-[#CBCBCB] rounded-md shadow-product-basket-card-box-shadow">
            <div className="px-4 py-3 relative border-b border-b-[#CECECE] w-full flex items-center justify-between">

                <div className="flex flex-col gap-2">
                    <p className="text-main-black text-base">{buyerName}</p>
                    <p className="text-[#74787C] text-xs">ایجاد شده در 15 اردیبهشت 1400</p>
                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="text-main-black text-base">{Number(250000).toLocaleString('fa-pe')} تومان</h4>
                    <p className={statusBasketCardProps == 0 ? pendingStatusBasketCardClassName : statusBasketCardProps == 1 ? successStatusBasketCardClassName : errorStatusBasketCardClassName}>{statusProduct[Number(statusBasketCardProps)]}</p>

                    <div className={`absolute left-0 bottom-3 ${statusBasketCardProps == 0 ? "bg-[#F4B740]" : statusBasketCardProps == 1 ? "bg-[#00BA88]" : "bg-[#ED2E2E]"} h-[30px] w-[5px] rounded-tl-lg rounded-tr-lg  transition-all duration-150`} />
                </div>

            </div>

            <div className="flex justify-end items-center gap-4 px-4 py-3 bg-[#EDEDED] w-full">
                <img src={productImg1} className="object-cover shadow-product-basket-card-box-shadow" />
                <img src={productImg2} className="object-cover shadow-product-basket-card-box-shadow" />
                <img src={productImg3} className="object-cover shadow-product-basket-card-box-shadow" />
                <img src={productImg4} className="object-cover shadow-product-basket-card-box-shadow" />
                <img src={productImg5} className="object-cover shadow-product-basket-card-box-shadow" />
            </div>

        </section>
    )
}

export default BasketCardComp