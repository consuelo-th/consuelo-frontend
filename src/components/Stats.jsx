import React from 'react';

const Stats = () => {
    const values = ['Mental Health Tips', 'Blog Posts', 'Self Affirmation', 'Community']
    return ( 
        <div className="flex justify-between items-stretch">
            {
                values.map(item => {
                    return (
                        <div key={item} className="bg-white border-2 border-gray-200 py-6 px-4 w-[250px] rounded-lg flex justify-between items-center gap-3">
                            <div>
                                <h3 className='font-bold text-base text-primary-110'>{item}</h3>
                                <p className="leading-relaxed text-sm text-gray-10">Updated 5 mins ago</p>
                            </div>
                            <div>
                                <h2 className="title-font font-semibold text-2xl text-primary-50">7</h2>
                            </div>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default Stats;