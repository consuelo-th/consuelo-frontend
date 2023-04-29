import React, { useContext, useState } from 'react';
import Button from '../components/common/button';
import CommunityCard from '../components/CommunityCard';
import { ModalContext } from "../contexts/ModalContext";
import Modal from '../components/Modal'
import getUser from '../services/user';

const Community = () => {
    const [newPost, setNewPost] = useState(false)
    const { isModalOpen, setIsModalOpen } = useContext(ModalContext)
    const user = getUser();
    const displayModal = () => {
        setIsModalOpen(true)
        setNewPost(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return ( 
        <div className='px-4 py-8 grid grid-cols-10 gap-3 '>
            <div className='col-span-7'>
                <div>
                    <h1 className='font-bold text-primary-110 mb-4'>Forum</h1>
                </div>

               <div className='mt-5'>
                    <CommunityCard />
                    <CommunityCard />
                    <CommunityCard />
                    <CommunityCard />
                    <CommunityCard />
                    <CommunityCard />
                    <CommunityCard />
               </div>

            </div>
            <div className='col-span-3 flex flex-col fixed right-6'>
                <div className='self-center mb-4'>
                    <Button handleClick={displayModal} size='lg' variant='light'>Start a new topic</Button>
                </div>
                {user.isAdmin && 
                
                    <div className='bg-white h-screen rounded-lg px-5'>
                        <h2 className='font-bold text-start text-primary-50 pt-8'>
                            Top Members
                        </h2>

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
                }
            
            </div>

            <Modal>
                <div className={`${newPost ? 'w-[69%] p-14 left-[59%]' : 'w-96 h-48 rounded-xl left-1/2'} bg-white  absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2  z-50`}>
                    {newPost && 
                    
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="flex p-5">
                            <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Profile picture" className="rounded-full w-12 h-12 mr-10" />
                            <textarea name="newPostArea" id="text" cols="30" rows="10" className='w-full placeholder:text-[#828282] text-black text-xl border-none outline-none resize-none focus:outline-none' placeholder='What’s going on?'></textarea>
                        </div>
                        <div className="flex justify-end">
                            <Button variant='light' handleClick={() => setNewPost(false)}>Post Topic</Button>
                        </div>
                    </form>
                    }
                   


                    {!newPost && 
                    <>
                        <button onClick={closeModal } className="text-3xl ml-auto absolute right-4 top-2">&times;</button>
                        <div className="flex justify-center items-center pt-8">
                            <img src="/images/sucessful-icon.svg" alt="" class="w-20" />
                        </div>
                        <div className="flex flex-col justify-center items-center mt-2">
                            <p className="font-semibold text-lg">Successfully Posted</p>
                            <p className="text-sm text-modal leading-6">
                            The topic has been published.
                            </p>
                        </div>
                    </>
                    }
                </div>
            </Modal> 

        </div>
   
     );
}
 
export default Community;