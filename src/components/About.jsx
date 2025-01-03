import React from 'react'

export default function About() {
  return (
    <section className='flex flex-col gap-10 p-3'>
        <div className='flex flex-col'>
            <div className='lg:w-1/2 flex flex-col gap-10'>
                <div>
                    <h2 className='text-3xl font-semibold italic mb-2'>Who We Are</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adiping elit. Magnam, corrupti fugit nisi molestiae debitis incidunt consectetur minus at eaque quas.</p>
                    <button className="primary-button mt-5">Learn More</button>
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-3 bg-med-grey border-2 border-light-grey rounded-lg p-5'>
                        <h2 className='text-2xl font-semibold'>Achieve your Business Goals</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, quidem dignissimos iure excepturi, voluptatem ullam quas vero nesciunt error inventore placeat soluta alias. Deleniti impedit ullam similique, velit rerum reprehenderit.</p>
                    </div>
                    <div className='flex flex-col gap-3 bg-med-grey border-2 border-light-grey rounded-lg p-5'>
                        <h2 className='text-2xl font-semibold'>Achieve your Business Goals</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, quidem dignissimos iure excepturi, voluptatem ullam quas vero nesciunt error inventore placeat soluta alias. Deleniti impedit ullam similique, velit rerum reprehenderit.</p>
                    </div>
                </div>
            </div>

            <div className='hidden lg:w-1/2 flex'>
                <img src="/laptop.png" alt="" />
                <img className='absolute lg:right-20 h-[20rem]' src="/phone.png" alt="" />
            </div>
        </div>
    </section>
  )
}
