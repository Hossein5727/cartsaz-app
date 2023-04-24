
import iranFlag from '../assets/iran-flag.svg'

import toast from 'react-hot-toast';

const SendPhoneNumber = ({onSubmit,formik}) => {

    const validatationFields = () => {
        toast(formik.errors.phoneNumber, {
            icon: '🙄', className: "bg-red-200"
        });
    }

    return (
        <>

            <form onSubmit={formik.handleSubmit} className="w-[350px] flex flex-col justify-center items-start gap-7">
                <p className="font-light text-main-black text-sm text-right">جهت ورود به پنل ابتدا شماره تماس خود را وارد کنید</p>
                <div className="w-full flex items-center gap-3 border border-[#CBCBCB] rounded-md px-4">
                    <input
                        type="text"
                        className="input input-ghost w-full focus:outline-none"
                        id="phoneNumber"
                        name="phoneNumber"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.phoneNumber}
                    />
                    <div className="flex items-center gap-2">
                        <p className="text-main-black font-bold">98+</p>
                        <img src={iranFlag} alt="ایران" />
                    </div>
                </div>

                {!formik.isValid ? (
                    <button
                        type="button"
                        className="btn bg-main-blue hover:bg-main-blue border-none outline-none font-medium w-full"
                        onClick={validatationFields}
                    >
                        ورود
                    </button>
                ) : (<button
                    type="submit"
                    className="btn bg-main-blue hover:bg-main-blue border-none outline-none font-medium w-full"
                >
                    ورود
                </button>)}


            </form>
        </> 
    )
}

export default SendPhoneNumber