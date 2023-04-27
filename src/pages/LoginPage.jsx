import { useState } from "react"
import { BsArrowRight } from 'react-icons/all'
import { useFormik } from "formik"
import * as Yup from 'yup'
import { Toaster, toast } from "react-hot-toast"

import SectionWrapper from "../hoc/SectionWrapper"

import logo from '../assets/logo.svg'
import SendPhoneNumber from "../components/SendPhoneNumber"
import EnterSubmitCode from "../components/EnterSubmitCode"

const initialValues = {
    phoneNumber: "",
}

const LoginPage = () => {
    
    const [isShowPinCode, setIsShowPinCode] = useState(false)
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const validationSchema = () => Yup.object({
        phoneNumber: Yup.string().required("لطفا فیلد شماره تماس را پر کنید").min(11, "فیلد شماره تماس باید 11 رقم باشد").max(11, "فیلد شماره تماس باید 11 رقم باشد")
    })

    const onSubmit = (values) => {
        setIsShowPinCode(true)
        toast("لطفا کد تایید را وارد کنید", {
            icon: '🤙', className: "bg-green-500 text-white",
        });
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        enableReinitialize: true,
        validateOnMount: true
    })

    return (

        <div className="w-full h-screen relative flex justify-center items-center flex-col gap-7">
            {isShowPinCode && (
                <button
                    onClick={() => setIsShowPinCode(false)}
                    className="absolute top-2 right-4 md:right-0 flex items-center gap-2 text-main-black font-bold"
                >
                    <BsArrowRight className="text-2xl" />
                    <p>تغییر شماره تلفن</p>
                </button>
            )}


            <img src={logo} alt="لوگو" />
            <h3 className="font-bold text-main-black">ورود/ثبت نام فروشگاه</h3>

            {isShowPinCode ?
                (
                    <EnterSubmitCode
                        phoneNumber={formik.values.phoneNumber}
                    />
                ) : (
                    <SendPhoneNumber
                        onSubmit={onSubmit}
                        formik={formik}
                    />
                )}
            <Toaster />
        </div>
    )
}

export default SectionWrapper(LoginPage)