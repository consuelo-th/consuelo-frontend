import React from 'react';
import Button from '../../components/common.jsx/button';
import { healthTips } from '../../data';

const MentalHealthTips = () => {
    return ( 
        <div className='px-4 bg-white'>
            <div className='flex justify-between items-center py-4'>
                <h1 className='font-bold text-primary-110'>Mental Health Tips</h1>
                <Button size='' variant='light'>New Post</Button>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    healthTips.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href}>
                                <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md" />
                                
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl uppercase">
                                        {items.title}
                                    </h3>
                                    <p className="text-sm mt-1">{items.desc}</p>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div>
        </div>
     );
}
 
export default MentalHealthTips;