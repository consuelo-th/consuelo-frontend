import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import user from '../services/user';


const Layout = ({children}) => {
    return ( 
        <div className='dashboard-layout'>
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
     );
}
 
export default Layout;