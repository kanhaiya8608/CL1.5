import React from 'react'
import { datafile } from '../data/datafile';
const Social = () => {
    return (
        <div className='m-6 pt-5'>
            <h2 className='text_gr pb-6'>Social Media:</h2>
            {datafile.filter((data) => data.category === "social").map((data) => {
                return (
                    <a href={data.link} target="_blank">
                        <div className='brand_box flex items-center p-6  md:-ml-5 rounded-2xl  cursor-pointer hover:bg-gray-800 hover:text-white transition duration-500 ease-in-out'>
                            <img src={data.imgLnk} alt='' width='56px' className='rounded-full' />
                            <div className='ml-4'>
                                <h3 className='text-lg font-medium'>{data.name}</h3>
                                <p className='text_gr'>{data.description}</p>
                            </div>
                        </div>
                    </a>
                );
            })}
        </div>
    )
}
export default Social

