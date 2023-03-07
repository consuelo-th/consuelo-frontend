import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Notification = () => {
    const notifications = [
        {
            'id': 0,
            'image': 'https://randomuser.me/api/portraits/men/46.jpg',
            'message': 'Hassan commented on a blog post',
            'time': 'just now'
        },
        {
            'id': 1,
            'image': 'https://randomuser.me/api/portraits/women/6.jpg',
            'message': 'Has liked a post',
            'time': '10mins ago'
        },
        {
            'id': 2,
            'image': 'https://randomuser.me/api/portraits/women/34.jpg',
            'message': 'Hikmah just followed you',
            'time': '1hr ago'
        },
        {
            'id': 4,
            'image': 'https://randomuser.me/api/portraits/men/28.jpg',
            'message': 'Saiid just fell in love',
            'time': '2hr ago'
        },
    ]
    return ( 
        <div className='flex flex-col gap-4 bg-white py-3 px-4 max-w-md absolute top-15 right-16 cursor-pointer'>
            {
                notifications.map((msg, idx) => {
                    return (
                        <Link to='/' className={notifications[idx - 1] && 'border-t-[.1px] border-t-helper pt-2'}>
                            <div className='flex gap-3 items-center'>
                                <div key={msg.id} className="">
                                    <img
                                        src={msg.image}
                                        className="rounded-full"
                                        width={32}
                                        alt='message'
                                    />
                                </div>
                                <div >
                                    <p className='text-primary-110 text-sm'>{msg.message}</p>
                                    <p className='text-gray-10 text-sm'>{msg.time}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
     );
}
 
export default Notification;