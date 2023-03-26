import React from 'react';
import Button from '../../components/common/button';
import Modal from '../../components/Modal';
import UploadDialogue from '../../components/uploadDialogue';
import { healthTips } from '../../data';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

const MentalHealthTips = () => {
    const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
    const handleClick = () => {
        setIsModalOpen(!isModalOpen);   
    }


    return ( 
        <div className='px-4 bg-white'>
            <Modal>
                <UploadDialogue title="Mental Health Tips" placeholder="What’s going on ?" image={true}/>
            </Modal>
            <div className='flex justify-between items-center py-4'>
                <h1 className='font-bold text-primary-110'>Mental Health Tips</h1>
                <Button size='' variant='light' handleClick={() => handleClick()}>New Post</Button>
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