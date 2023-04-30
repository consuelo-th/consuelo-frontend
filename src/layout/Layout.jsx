import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import getUser from '../services/user';
import { useEffect, useState } from 'react';
import { ModalContext } from '../contexts/ModalContext';


const Layout = ({children}) => {
    const user = getUser();
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <ModalContext.Provider value={{isModalOpen, setIsModalOpen, hamburgerOpen, setHamburgerOpen}}>
            <div className='dashboard-layout' onFocus={closeModal}>
                <header className={`dashboard-header fixed ${user.isAdmin && 'z-10'}`}>
                    <Header />
                </header>
                <nav className={`dashboard-nav fixed mt-16 ${!user.isAdmin && 'z-20'}`}>
                    <SideBar />
                </nav>
                <main className='dashboard-main mt-20 px-5'>
                <Outlet /> 
                {children && <div>{children}</div>}
                </main>
            </div>
        </ModalContext.Provider>
     );
}
 
export default Layout;