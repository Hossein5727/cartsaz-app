import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import PinInput from "react-pin-input";
import { useNavigate } from "react-router-dom";

const EnterSubmitCode = ({ phoneNumber }) => {

    const [value, setValue] = useState("")
    const [isShowSubmitButton, setIsShowSubmitButton] = useState(false)
    const pinRef = useRef()
    const navigate = useNavigate()

    useEffect(() => {
        pinRef.current.focus()
    }, [])

    const changeHandler = (value) => {
        setValue(value)
    }

    const submitHandler = () => {
        navigate("/enteruserinfo")
    }

    return (
        <div className="w-[350px] flex flex-col justify-center gap-7 ">
            <p className="font-light text-main-black text-sm text-right">
                کد به شماره <span className="font-bold">{phoneNumber}</span> ارسال شد.کد را وارد کنید
            </p>

            <div className="text-center flex flex-col gap-7">
                <PinInput
                    length={5}
                    inputMode="number"
                    type="numeric"
                    onChange={changeHandler}
                    inputStyle={{ marginRight: "8px", marginLeft: "8px", borderRadius: "4px", border: "1px solid #CBCBCB", transition: "all 0.2s" }}
                    inputFocusStyle={{ border: "1px solid #0182FE", transition: "all 0.2s" }}
                    style={{ direction: "ltr" }}
                    autoSelect={true}
                    ref={pinRef}
                    onComplete={() => setIsShowSubmitButton(true)}
                />

                {isShowSubmitButton && (
                    <button
                        onClick={submitHandler}
                        className="btn bg-main-blue hover:bg-main-blue border-none outline-none font-medium w-full"
                    >
                        ثبت کد
                    </button>
                )}

            </div>

        </div>
    )
}

export default EnterSubmitCode