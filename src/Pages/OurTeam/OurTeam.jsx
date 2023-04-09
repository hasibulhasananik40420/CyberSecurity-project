import React from 'react'
import OurTeamCard from './OurTeamCard'
const OurTeam = () => {
    return (
        <div className='bg-bodyColor min-h-screen'>
            {/* our team section start here */}
            <div className='text-center '>
                <h1 className='text-6xl text-white font-Cuprum font-bold'>Our Team</h1>
                <p className='text-[#F9C747] font-medium text-sm font-Inter leading-8'>Home / Our Team</p>
            </div>

            {/*our team Card  here*/}
            <div className='pt-12 pb-12 '>
                <OurTeamCard />



            </div>

        </div>
    )
}

export default OurTeam