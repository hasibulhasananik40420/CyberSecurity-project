import React, { useEffect, useState } from 'react'
import FaqAccordion from '../../Components/FaqAccordion/FaqAccordion'
import rightArrow from '../../assets/Regular.svg'
const Faqs = () => {
    const [faqs, setfaqs] = useState([])
    useEffect(() => {
        fetch('Faq.json')
            .then(res => res.json())
            .then(data => setfaqs(data))
    }, [])
    return (
        <div className='bg-bodyColor '>

            <div className='text-center '>
                <h1 className='text-6xl text-white font-Cuprum font-bold'>Faqs</h1>
                <p className='text-[#F9C747] font-medium text-sm font-Inter leading-8'>Home / Faqs</p>
            </div>

            {/******************* faqs section start here  ****************************/}
            <div className='lg:min-h-screen h-full max-w-containerxs mx-auto p-3 lg:p-0 mt-8 font-Cuprum'>
                {
                    faqs?.map(faq => <FaqAccordion key={faq._id} data={faq} />)
                }



                <div className='flex justify-center items-center pb-8 pt-8'>
                    <button className='bg-[#3657CD] text-white font-Cuprum text-base font-medium px-4 py-2 flex items-center justify-center gap-1 transition-all duration-300 transform hover:scale-105'>
                        <span>Join our team</span> <span> <img className='w-4 h-3' src={rightArrow} alt="" /></span>
                    </button>
                </div>
            </div>
            {/******************* faqs section end here  ****************************/}



        </div>
    )
}

export default Faqs