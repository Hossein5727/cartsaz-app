
const LastProduct = () => {
    return (
        <div className="w-full px-4 py-4 flex justify-between items-center border border-[#CBCBCB] rounded-md shadow-product-basket-card-box-shadow">
            <h4 className="text-main-black text-base">عسل شانه ای</h4>
            <h4 className="text-main-black text-base">{Number(250000).toLocaleString('fa-pe')} تومان</h4>
        </div>
    )
}

export default LastProduct