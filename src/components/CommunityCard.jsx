import React from 'react';

const CommunityCard = () => {
    return ( 
        <div className="border bg-white shadow-sm rounded-lg p-4 mb-4">
            <div className="flex space-x-4">
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Profile picture" className="rounded-full w-12 h-12" />
                <div className="flex-1">
                <h2 className="text-lg font-bold">Hassan Yahya</h2>
                <p className="text-gray-500">Posted on Sep, 22, 2024</p>
                </div>
                <button>...</button>
            </div>
            <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at lectus eu mi ultrices vulputate. Fusce semper arcu et sapien semper blandit.</p>
            <div className="flex justify-start gap-4">
                <div className="text-gray-500 flex gap-2 cursor-pointer">
                    <div>
                        <svg className='cursor-pointer w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                            <path d="M12 21.35l-1.45-1.32C4.53 14.67 2 12.28 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.37.81 4.5 2.08C13.13 4.81 14.76 4 16.5 4 19.58 4 22 6.42 22 9.5c0 2.78-2.53 5.17-8.55 10.53L12 21.35z"/>
                        </svg>
                    </div>
                   <p> 10 Likes</p>
                </div>
                <button className="text-gray-500 hover:underline">10 Comments</button>
            </div>
        </div>

     );
}
 
export default CommunityCard;