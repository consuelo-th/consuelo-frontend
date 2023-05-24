import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import getUser from '../services/user';
import { useEffect, useState } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import LogoutModal from '../components/common/LogoutModal';


const Layout = ({children}) => {
    const user = getUser();
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }
    const closeLogoutModal = () => {
        setIsLogoutOpen(false)
    }

    return (
        <ModalContext.Provider value={{isModalOpen, setIsModalOpen, hamburgerOpen, setHamburgerOpen, isLogoutOpen, setIsLogoutOpen}}>
            
            <div className='flex flex-row'>
                <nav className={`fixed z-50 w-[280px] ${!user.isAdmin && 'z-20'}`}>
                    <SideBar />
                </nav>
                <div className="md:ml-[280px] w-screen">
                    <header className={`sticky top-0 z-20 ${user.isAdmin && 'z-10'}`}>
                        <Header />
                    </header>
                    <main className='w-[95%] flex flex-col flex-grow mx-auto'>
                    <Outlet /> 
                    {children && <div>{children}</div>}
                    </main>
                </div>
            </div>

            {isLogoutOpen && <div className="fixed inset-0 z-50 overflow-y-auto">
                <div className="fixed inset-0 w-full h-full bg-black bg-opacity-40" onClick={closeLogoutModal}></div>
                    <div className="flex items-center min-h-screen px-4 py-8" >
                        <LogoutModal />
                    </div>
                </div>
            }
        </ModalContext.Provider>
     );
}
 
export default Layout;