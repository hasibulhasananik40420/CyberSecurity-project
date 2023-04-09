import React from 'react'
import PricingPlanCard from './PricingPlanCard'

const PricingPlan = () => {
    return (
        <div className='bg-bodyColor'>
            {/* pricingplan section start here */}
            <div className='text-center '>
                <h1 className='text-6xl text-white font-Cuprum font-bold'>Pricing Plan</h1>
                <p className='text-[#F9C747] font-medium text-sm font-Inter leading-8'>Home / Pricing Plan</p>
            </div>

            {/*pricing Card  here*/}
            <div className='pt-12 pb-12 '>

                <PricingPlanCard />



            </div>

        </div>
    )
}

export default PricingPlan