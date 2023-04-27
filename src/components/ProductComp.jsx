import defaultImg from '../assets/productProductPage/p-2.png'
import deleteIcon from '../assets/delete-icon.svg'

const ProductComp = ({ imgSrc = defaultImg, productName = "عسل شانه ای",onDelete }) => {
    return (
        <div className='w-full flex justify-between items-center px-4 py-3 border border-[#CBCBCB] rounded-md shadow-product-basket-card-box-shadow'>

            <div className='flex items-center gap-3'>
                <img src={imgSrc} />

                <div className='flex flex-col gap-1'>
                    <p className="text-main-black text-base">{productName}</p>
                    <p className="text-[#171F26] text-xs">قیمت واحد: {Number(250000).toLocaleString('fa-pe')}</p>
                </div>

            </div>

            <button className='btn btn-ghost border-none outline-none hover:outline-none' onClick={onDelete}>
                <img src={deleteIcon} />
            </button>

        </div>
    )
}

export default ProductComp