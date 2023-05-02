import { useEffect, useState } from "react"
import { BsArrowRight } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { motion } from 'framer-motion'
import BasketCardComp from "../components/BasketCardComp"

const CreateBasketCardPage = () => {

    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const isLarge = useIsLarge()
    const navigate = useNavigate()

    console.log(isLarge);
    console.log(screenSize.width);


    
    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }


    const variants =
    {
        visible: {
            x: 0,
            transition: { type: "tween", duration: "0.4", ease: "anticipate", }
        },
        hidden: {
            x: 2000
        },
        // visible: { opacity: 1,x:200 },
        // hidden: { opacity: 0 },
    }

    const variants2 = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);


        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])


    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={screenSize.width>=1024 ? variants2 : variants}
            className={`h-screen lg:px-4`}
        >
            <div className="px-4 py-5 border-b flex items-center gap-2 border-b-[#CBCBCB] ">
                <BsArrowRight
                    onClick={() => navigate(-1)}
                    className="text-2xl lg:hidden"
                />
                <h1 className="text-lg font-bold text-main-black">ایجاد سبد خرید جدید</h1>
            </div>


        </motion.section>
    )
}

export default CreateBasketCardPage