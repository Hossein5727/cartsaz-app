
const TabSectionBasketCard = () => {
    return (
        <div className="relative w-full flex items-center gap-7 mt-4 px-3 py-4 border-b border-b-[#EDEDED] overflow-x-scroll">
            <p className="text-sm text-main-blue whitespace-nowrap">همه (23)</p>
            <div className="absolute bottom-0 bg-main-blue h-[5px] w-[40px] rounded-tl-lg rounded-tr-lg  transition-all duration-150"></div>
            <p className="text-sm text-[#CBCBCB] whitespace-nowrap">متظر تکمیل</p>
            <p className="text-sm text-[#CBCBCB] whitespace-nowrap">آماده ارسال</p>
            <p className="text-sm text-[#CBCBCB] whitespace-nowrap">تمام شده</p>
            <p className="text-sm text-[#CBCBCB] whitespace-nowrap">لغو شده</p>

        </div>
    )
}

export default TabSectionBasketCard