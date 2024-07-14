import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>How Do I Refer to Someone!</h2>
                <p className='text-3xl py-6 text-gray-500'>Follow this simple steps one by one to refer and earn.</p>
            </div>

            <div className='grid md:grid-cols-3 gap-7 px-2 text-center'>
                <div className='border py-20 rounded-xl shadow-xl' >
                    <p className='text-4xl font-bold text-indigo-600'>REFER</p>
                    <p className='text-gray-400 mt-2'>Submit referrals easily via our website's referral section.</p>
                </div>
                <div  className='border py-20 rounded-xl shadow-xl' >
                    <p className='text-4xl font-bold text-indigo-600'>Join program</p>
                    <p className='text-gray-400 text-1.5xl mt-2'>Earn rewards once your referral joins an Accredian program</p>
                </div>
                <div className='border py-20 rounded-xl shadow-xl' >
                    <p className='text-4xl font-bold text-indigo-600'>EARN</p>
                    <p className='text-gray-400 mt-2'>Both parties recieve a bonus 30 days after program enrollment</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About