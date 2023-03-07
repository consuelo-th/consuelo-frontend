import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';


const Layout = () => {
    return ( 
        <div className='dashboard-layout'>
            <header className='dashboard-header fixed z-10'>
                <Header />
            </header>
            <nav className='dashboard-nav fixed mt-16'>
                <SideBar />
            </nav>
            <main className='dashboard-main mt-20 px-5'>
                <Outlet />
            </main>
        </div>
     );
}
 
export default Layout;