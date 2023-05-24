import React, { useContext, useState } from 'react';
import Button from '../../components/common/button';
import { ModalContext } from '../../contexts/ModalContext';
import Modal from '../../components/Modal';
import UploadDialogue from '../../components/uploadDialogue';
import Confirm from '../../components/common/confirmationDialogue'
import AdminSelfAffirmationCard from '../../components/Self Affirmation Cards/AdminSelfAffirmationCard';
import { quotes } from "../../data";


const SelfAffirmation = () => {
    const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
    const [confirm, setConfirm] = useState(false)

    const handleClick = () => {
        setIsModalOpen(true);  
        setConfirm(false)
    }
    const header = 'Self Affirmation'
    const text = 'self affirmation'
    return ( 
        <div className='px-4 bg-white'>
            <Modal>
                {!confirm && <UploadDialogue title="Self Affirmation" placeholder="Enter words or affrimation here" handleConfirm={setConfirm}/>}
                {confirm && <Confirm header={header} text={text} />}
            </Modal>
            <div className='flex justify-between items-center py-4'>
                <h1 className='font-bold text-primary-110'>Self Affirmation</h1>   
                <Button size='' variant='light' handleClick={() => handleClick()}>New Post</Button>
            </div>
            
            <div className='mb-4'>
                <h2 className='font-bold text-primary-110 mb-2'>This week</h2>
                <div className="flex flex-wrap justify-start gap-4">
                  {quotes.map(quote => {
                    return (
                      <AdminSelfAffirmationCard key={quote.id} quote={quote.quote} />
                    )
                  })}
                </div>
            </div>

      <div className="mb-4 py-4">
        <h2 className="font-bold text-primary-110 mb-2">Last week</h2>
        <div className="flex flex-wrap justify-start gap-4">
          {quotes.map(quote => {
            return (
              <AdminSelfAffirmationCard key={quote.id} quote={quote.quote} />
            )
          })}
        </div>
      </div>

      <div className="my-4">
        <h2 className="font-bold text-primary-110 mb-2">Last month</h2>
        <div className="flex flex-wrap justify-start gap-4">
            {quotes.map(quote => {
              return (
                <AdminSelfAffirmationCard key={quote.id} quote={quote.quote} />
              )
            })}
        </div>
      </div>
    </div>
  );
};

export default SelfAffirmation;
