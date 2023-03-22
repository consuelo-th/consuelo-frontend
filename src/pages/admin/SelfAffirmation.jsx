import React from 'react';
import Button from '../../components/common.jsx/button';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import Modal from '../../components/Modal';
import UploadDialogue from '../../components/common.jsx/uploadDialogue';
import Confirm from '../../components/common.jsx/confirmationDialogue'

const SelfAffirmation = () => {
    const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
    const handleClick = () => {
        setIsModalOpen(!isModalOpen);   
    }

    return ( 
        <div className='px-4 bg-white'>
            <Modal>
                <UploadDialogue title="Self Affirmation" placeholder="Enter words or affrimation here" />
            </Modal>
            <div className='flex justify-between items-center py-4'>
                <h1 className='font-bold text-primary-110'>Self Affirmation</h1>   
                <Button size='' variant='light' handleClick={() => handleClick()}>New Post</Button>
            </div>
            
            <div className='mb-4'>
                <h2 className='font-bold text-primary-110 mb-2'>This week</h2>
                <div className='flex justify-between items-center gap-2'>
                    <div className="h-full bg-affirmation-bg p-8 rounded relative">
                        <div className="relative border-2">
                            <div className='w-36 h-36 border-2 border-primary-70 rounded-full absolute -top-20 -left-24'>1</div>
                            <div className='w-36 h-36 border-2 border-primary-70 rounded-full absolute -top-32 -left-10'>2</div>
                        </div>
                        <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                    </div>
                    <div className="h-full bg-affirmation-bg p-8 rounded">
                        <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                    </div>
                    <div className="h-full bg-affirmation-bg p-8 rounded">
                        <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                    </div>
                    
                </div>
            </div>

            <div className='mb-4'>
                <h2 className='font-bold text-primary-110 mb-2'>Last week</h2>
                <div className='flex justify-between items-center gap-2'>
                    <div className="h-full bg-affirmation-bg p-8 rounded">
                        <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                    </div>
                    <div className="h-full bg-affirmation-bg p-8 rounded">
                        <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                    </div>
                    <div className="h-full bg-affirmation-bg p-8 rounded">
                        <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                    </div>
                    
                </div>
            </div>

            <div className='mb-4'>
                <h2 className='font-bold text-primary-110 mb-2'>Last month</h2>
                <div className='flex justify-between items-center gap-2'>
                    <div className="h-full bg-affirmation-bg p-8 rounded">
                        <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                    </div>
                    <div className="h-full bg-affirmation-bg p-8 rounded">
                        <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                    </div>
                    <div className="h-full bg-affirmation-bg p-8 rounded">
                        <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default SelfAffirmation;