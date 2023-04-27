import warningIcon from "../assets/danger-icon.svg"

const AlertDelete = ({ title = "از حذف محصول اطمینان دارید؟", isShowModal, closeModal,deleteProduct }) => {
    return (
        <section className={`fixed ${isShowModal && "inset-0 transition-all duration-150"} transition-all duration-150 z-[5] w-screen h-screen bg-[#00000059] flex justify-center items-center`}>
            <div className="w-[340px] px-4 py-3 flex justify-center items-center flex-col gap-7 bg-white rounded-lg border-t-[6px] border-t-[#F4B740]">
                <div className="flex flex-col items-center gap-3 ">
                    <img src={warningIcon} className="w-14 h-14" />
                    <h3 className="text-base text-[#000000]">{title}</h3>
                </div>

                <div className="flex items-center gap-3 w-full">
                    <button onClick={closeModal} className="btn btn-ghost text-[#74787C] border-none outline-none font-medium flex-[0.5]">بستن</button>
                    <button onClick={deleteProduct} className="btn bg-main-blue hover:bg-main-blue border-none outline-none font-medium flex-[0.5]">حذف</button>
                </div>
            </div>
        </section>
    )
}

export default AlertDelete