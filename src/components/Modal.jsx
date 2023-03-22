import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export default ({children}) => {
    const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
    const closeModal = (e) => {
        e.stopPropagation()
        setIsModalOpen(false)
    }
    return (
        isModalOpen ? (
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="fixed inset-0 w-full h-full bg-black bg-opacity-40" onClick={(e) => closeModal(e)}></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    {children}
                </div>
            </div>
        ) : " "
    )
}