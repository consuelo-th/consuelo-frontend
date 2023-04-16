import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';

const UploadDialogue = ({title, placeholder, image, handleConfirm}) => {
    const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

    const handleClick = () => {
        handleConfirm(true)
        console.log(isModalOpen)
    }

    return ( 
        <div className="relative w-full max-w-xl p-4 mx-auto bg-white rounded-md shadow-lg">
            <div className="flex justify-end">
                <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                    onClick={() => setIsModalOpen(false)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className="mx-auto py-3 space-y-3">
                <form onSubmit={(e) => e.preventDefault()}>
                    {
                        image && (
                            <div className="mb-4">
                                <p for="message" class="block mb-2 text-lg font-semibold text-black">Select image</p>
                                <div class="flex items-center justify-center w-full">
                                    <label for="dropzone-file" class="flex flex-col items-start justify-center w-full border border-primary-50 rounded-lg cursor-pointer hover:bg-gray-100">
                                        <div class="w-full flex items-center justify-between p-1">
                                            <p class="text-sm text-gray-500 dark:text-gray-400">Select a supporting image</p>
                                            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        </div>
                                        <input id="dropzone-file" type="file" class="hidden" />
                                    </label>
                                </div> 
                            </div>
                        )
                    }
                    <div className="relative">                                    
                        <label for="message" class="block mb-2 text-lg font-semibold text-black">{title}</label>
                        <textarea id="message" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-primary-50 focus:ring-primary-60 focus:border-primary-50" placeholder={placeholder}></textarea>
                    </div>
                    <button onClick={handleClick} className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-primary-50 hover:bg-primary-60 active:bg-primary-60 rounded-lg ring-offset-2 ring-primary-50 focus:ring-2">
                        Upload
                    </button>
                </form>
            </div>
        </div>
     );
}
 
export default UploadDialogue;