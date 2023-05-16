import { useState, useContext } from "react"
import { ModalContext } from "../../contexts/ModalContext";
import { Link } from "react-router-dom";


export default () => {
    const { setIsLogoutOpen } = useContext(ModalContext)

    const closeModal = () => {
        setIsLogoutOpen(false)
    }

    const openLogoutModal = () => {
        setIsLogoutOpen(true)
    }

    return (
        <div className="py-3 pt-8 w-full md:w-auto max-w-sm bg-white rounded-xl left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-50">
            <button onClick={closeModal} className="text-3xl ml-auto absolute right-4 top-2">&times;</button>
            <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-green-100 rounded-full">
                <img src="/images/logout-icon.svg" alt="confirmation-icon" />
            </div>
            

            <div className="mt-2 text-center flex flex-col justify-center items-center px-4">
                <h4 className="text-lg font-semibold text-[#BF5E5E]">
                    Are you sure you want to logout
                </h4>
                
                <div className="items-center gap-2 mt-3  w-full">
                    <Link to="/logout">
                        <button onClick={openLogoutModal} className="w-full mt-2 p-2.5 flex-1 text-white bg-[#BF5E5E] rounded-md outline-none ring-offset-2 ring-primary-50 focus:ring-2">
                            Confirm
                        </button>
                    </Link>
                    <button className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 focus:ring-2"
                            onClick={closeModal}>
                            Cancel
                    </button>
                </div>
            </div>
            
        </div>
    )
}