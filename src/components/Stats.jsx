import React from 'react';

const Stats = () => {
    const values = ['Mental Health Tips', 'Blog Posts', 'Self Affirmation', 'Community']
    return ( 
        <div className="flex justify-between items-stretch">
            {
                values.map(item => {
                    return (
                        <div key={item} className="bg-white border-2 border-gray-200 p-3 rounded-lg flex justify-between items-center gap-3">
                            <div>
                                <h3 className='heading-6 text-primary-110'>{item}</h3>
                                <p className="leading-relaxed text-gray-10">Updated 5 mins ago</p>
                            </div>
                            <div>
                                <h2 className="title-font font-medium text-3xl text-primary-50">7K</h2>
                            </div>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default Stats;