
const LastProductOfBasketCard = ({ statusProductProps }) => {
    const pendingStatusProductClassName = " p-1 text-xs text-center border rounded-2xl border-[#A9791C] bg-[#FFF8E1] text-[#A9791C]";
    const successStatusProductClassName = " p-1 text-xs text-center border rounded-2xl border-[#00BA88] bg-[#F3FDFA] text-[#00966D]";
    const errorStatusProductClassName = " p-1 text-xs text-center border rounded-2xl border-[#ED2E2E] bg-[#FFF2F2] text-[#C30000]";

    const statusProduct = ["منتظر تکمیل", "آماده ارسال ", "لغو شده"]

    return (
        <div className="w-full px-4 py-3 flex justify-between items-center border border-[#CBCBCB] rounded-md shadow-product-basket-card-box-shadow">

            <div className="flex items-center gap-3">
                <p className="text-xs text-main-blue">۰۰۰۱</p>
                <div className="flex flex-col gap-2">
                    <h4 className="text-base text-main-black">۴ محصول</h4>
                    <p className="text-xs text-[#74787C]">ایجاد شده در ۱۵ اردیبهشت ۱۴۰۱</p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="text-main-black text-base">{Number(250000).toLocaleString('fa-pe')} تومان</h4>
                <p className={statusProductProps==0?pendingStatusProductClassName:statusProductProps==1?successStatusProductClassName:errorStatusProductClassName}>{statusProduct[Number(statusProductProps)]}</p>
            </div>

        </div>
    )
}

export default LastProductOfBasketCard