import React from 'react';
import { useFormik } from "formik"
import * as Yup from 'yup'

import { useNavigate } from 'react-router-dom';
import { useUserDataStore } from '../store/userData';


const initialValues = {
    name: "",
    instagram: "",
    shopName: "",
    email: "",
    address: "",
    postalCode: "",
    activityType: "",
}

const EnterUserInfo = () => {

    const newUserData = useUserDataStore(state => state.newUserData)

    
    const navigate = useNavigate()

    const validationSchema = () => Yup.object({
        name: Yup.string().required("فیلد نام و نام خانوادگی اجباری است"),
        instagram: Yup.string().required("فیلد اینستاگرام اجباری است"),
        shopName: Yup.string().required("فیلد نام فروشگاه اجباری است"),
        activityType: Yup.string().required("فیلد نوع فعالیت اجباری است"),
        email: Yup.string().email("فیلد ایمیل را بدرستی وارد کنید"),
    })

    const onSubmit = (values) => {
        newUserData(values)
        navigate("/home/cart/home")
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        enableReinitialize: true,
        validateOnMount: true
    })

    return (
        <div className="h-screen">
            <div className="w-full py-3 px-8 border-b border-b-[#CBCBCB] text-main-black font-bold">
                <h3>ثبت نام فروشنده</h3>
            </div>
            <div className="mx-auto max-w-7xl px-4 py-2 flex justify-center items-center">
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 w-[370px]">
                    <div className="flex flex-col gap-2 text-main-black">
                        <label>نام و نام خانوادگی</label>
                        <input
                            type="text"
                            className="input input-bordered border-[#CBCBCB] w-full focus:outline-none"
                            id="name"
                            name="name"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            placeholder="مثال:احسان عزتی"
                        />
                        {formik.touched.name && formik.errors.name && (
                            <p className="text-sm text-red-400">{formik.errors.name}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2 text-main-black">
                        <label>ایدی پیج اینستاگرام فروشگاه</label>

                        <div className="form-control w-full" >
                            <label className="input-group border border-[#CBCBCB] rounded-lg">
                                <input
                                    id="instagram"
                                    name="instagram"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.instagram}
                                    style={{ direction: "ltr" }}
                                    type="text"
                                    className="input focus:outline-none w-full"
                                />
                                <span className="bg-white text-[#74787C]">/instagram.com</span>
                            </label>
                        </div>

                        {formik.touched.instagram && formik.errors.instagram && (
                            <p className="text-sm text-red-400">{formik.errors.instagram}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2 text-main-black">
                        <label>نام فروشگاه</label>
                        <input
                            type="text"
                            className="input input-bordered border-[#CBCBCB] w-full focus:outline-none"
                            id="shopName"
                            name="shopName"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.shopName}
                            placeholder="مثال:موبایلینو"
                        />
                        {formik.touched.shopName && formik.errors.shopName && (
                            <p className="text-sm text-red-400">{formik.errors.shopName}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2 text-main-black">
                        <label>نوع فعالیت فروشگاه</label>

                        <select
                            id="activityType"
                            name="activityType"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.activityType}
                            className="select input-bordered border-[#CBCBCB] focus:outline-none w-full"
                        >
                            <option value="NONE" disabled selected>انتخاب شود</option>
                            <option value="smoke">دخانیات</option>
                            <option value="clothing">پوشاک</option>
                            <option value="medical services">خدمات پزشکی</option>
                        </select>

                        {formik.touched.activityType && formik.errors.activityType && (
                            <p className="text-sm text-red-400">{formik.errors.activityType}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2 text-main-black">
                        <label>ایمیل (اختیاری)</label>
                        <input
                            type="text"
                            className="input input-bordered border-[#CBCBCB] w-full focus:outline-none"
                            id="email"
                            name="email"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder="مثال:cartsaz@gmail.com"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-sm text-red-400">{formik.errors.email}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2 text-main-black">
                        <label>آدرس فرستنده (اختیاری)</label>
                        <textarea
                            className="border rounded-lg px-4 py-2  border-[#CBCBCB] w-full focus:outline-none"
                            id="address"
                            name="address"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.address}
                            placeholder="مثال:تهران میدان آزادی، پلاک 2"
                            rows="6"
                            cols="50"
                        />
                        {formik.touched.address && formik.errors.address && (
                            <p className="text-sm text-red-400">{formik.errors.address}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2 text-main-black">
                        <label>کد پستی فرستنده (اختیاری)</label>
                        <input
                            type="text"
                            className="input input-bordered border-[#CBCBCB] w-full focus:outline-none"
                            id="postalCode"
                            name="postalCode"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.postalCode}
                            placeholder="مثال:1399886648411"
                        />
                        {formik.touched.postalCode && formik.errors.postalCode && (
                            <p className="text-sm text-red-400">{formik.errors.postalCode}</p>
                        )}
                    </div>

                    <div className="px-6 py-4 bg-[#F2F2F2] rounded-lg text-justify">
                        <p>آدرس فرستنده و کدپستی فرستنده در خروجی برگه ارسال از سبدهای خرید درج میشود.
                            بعد نیز میتوانید این بخش را اصلاح کنید.
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="btn bg-main-blue  disabled:bg-neutral-500 disabled:text-slate-300 disabled:cursor-not-allowed transition-all duration-150 hover:bg-main-blue border-none outline-none font-medium w-full"
                        disabled={!formik.isValid}
                    >
                        تکمیل ثبت نام
                    </button>

                </form>
            </div>
        </div>
    )
}

export default EnterUserInfo