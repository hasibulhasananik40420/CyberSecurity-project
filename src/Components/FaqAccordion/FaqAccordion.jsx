import React, { useState } from 'react'
import plusIcon from '../../assets/faqs/plusicon.svg'
import minusIcon from '../../assets/faqs/minusicon.svg'
const FaqAccordion = ({ data }) => {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <div onClick={() => { setVisible(!visible) }}
                style={{ backgroundColor: `${visible ? '' : ''}` }}
                className='w-full  h-14 min-h-max mb-2 border-b border-b-[#192E44] lg:p-2  duration-500 text-black hover:text-white cursor-pointer'>
                <div className='p-2  w-full flex justify-between'>
                    {/* Question */}
                    <div>
                        <p className='  lg:text-lg ' style={{ color: `${visible ? 'white' : 'white'}` }}>{data?.question}</p>
                    </div>
                    {/* Plus Icon and Minus Icon  here*/}
                    <div>

                        {
                            visible ? <img className='text-base' style={{ color: `${visible ? '#99A2AC' : '#99A2AC'}` }} src={minusIcon} alt="" /> : <img className='text-base' style={{ color: `${visible ? 'white' : '#99A2AC'}` }} src={plusIcon} alt="" />
                        }

                    </div>
                    {/* Plus Icon and Minus Icon  here*/}

                </div>
            </div>
            {/**********************  Answar all the question here  *************************/}
            {
                visible
                &&
                <div className='p-2 w-full min-h-max duration-300 my-3 text-[#99A2AC]'>
                    <p>{data?.answar}</p>
                </div>
            }
            {/**********************  Answar all the question end here  *************************/}
        </div>
    )
}

export default FaqAccordion