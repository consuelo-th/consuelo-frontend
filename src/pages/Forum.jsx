import React from 'react';
import Button from '../components/common.jsx/button';
import ForumCard from '../components/ForumCard';

const Forum = () => {
    return ( 
        <div className='px-4 grid grid-cols-10 gap-3 relative'>
            <div className='col-span-7'>
                <div>
                    <h1 className='font-bold text-primary-110 mb-4'>Mental Health Tips</h1>
                </div>

               <div className='mt-8'>
                    <ForumCard />
                    <ForumCard />
                    <ForumCard />
                    <ForumCard />
                    <ForumCard />
                    <ForumCard />
                    <ForumCard />
               </div>

            </div>
            <div className='col-span-3 flex flex-col fixed right-6'>
                <div className='self-center mb-4'>
                    <Button size='lg' variant='light'>New Post</Button>
                </div>

                <div className='bg-white h-screen rounded-lg'>
                    <h2 className='font-bold text-center text-primary-50'>Top Members</h2>

                        <div className='flex flex-col gap-2 px-2 mt-4'>
                            <div className='flex gap-2 items-center'>
                                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Profile picture" className="rounded-full w-12 h-12" />
                                <p>Hassan Oladele</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Profile picture" className="rounded-full w-12 h-12" />
                                <p>Hassan Oladele</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Profile picture" className="rounded-full w-12 h-12" />
                                <p>Hassan Oladele</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Profile picture" className="rounded-full w-12 h-12" />
                                <p>Hassan Oladele</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Profile picture" className="rounded-full w-12 h-12" />
                                <p>Hassan Oladele</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Profile picture" className="rounded-full w-12 h-12" />
                                <p>Hassan Oladele</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Profile picture" className="rounded-full w-12 h-12" />
                                <p>Hassan Oladele</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Profile picture" className="rounded-full w-12 h-12" />
                                <p>Hassan Oladele</p>
                            </div>
                    </div>
                </div>
            
            </div>
        </div>
   
     );
}
 
export default Forum;