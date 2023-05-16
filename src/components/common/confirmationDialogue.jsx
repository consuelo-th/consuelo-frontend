import { useState, useContext } from "react"
import { ModalContext } from "../../contexts/ModalContext";


export default ({header, text}) => {
    const { isModalOpen, setIsModalOpen } = useContext(ModalContext)

    const [state, setState] = useState(false)
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="py-3 pt-8 max-w-sm bg-white rounded-xl left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-50">
            <button onClick={closeModal} className="text-3xl ml-auto absolute right-4 top-2">&times;</button>
            <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-green-100 rounded-full">
                <img src="/images/sucessful-icon.svg" alt="confirmation-icon" />
            </div>
            {
                !state && 
                
                <div className="mt-2 text-center flex flex-col justify-center items-center px-4 sm:ml-4 ">
                    <h4 className="text-lg font-semibold text-gray-800">
                         {`${header} Published`} 
                    </h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                        {`This ${text} post is about to be published. Team members will be able to edit this post.`}
                    </p>
                    <div className="items-center gap-2 mt-3">
                        <button className="w-full mt-2 p-2.5 flex-1 text-white bg-primary-50 rounded-md outline-none ring-offset-2 ring-primary-50 focus:ring-2"
                            onClick={() => setState(true)}
                        >
                            Confirm
                        </button>
                        <button className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 focus:ring-2"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            }

            { state && 
                <div className="px-10 py-5 flex flex-col justify-center items-center text-center mt-2">
                    <p className="font-semibold text-lg">Successfully Posted</p>
                    <p className="text-sm text-modal leading-6">
                        {`This ${text} post has been published. Team members will be able to edit this post.`}
                    </p>
                </div>
            }
            
        </div>
    )
}