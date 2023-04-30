import { navigation } from '../data';
import { Link, useLocation } from 'react-router-dom';
import { useContext, useState } from "react";
import { ModalContext } from '../contexts/ModalContext';
import getUser from '../services/user';

const SideBar = () => {
    const [hoveredIndex, setHoveredIndex] =  useState(null)
    const { hamburgerOpen, setHamburgerOpen } = useContext(ModalContext);
    const onHamburger = () => {
        setHamburgerOpen((prevState) => !prevState)
    }
    const user = getUser();
    const location = useLocation().pathname;
    const active = 'border-primary-70 bg-primary-10 text-primary-60';
    const inactive = ' border-transparent text-white hover:border-primary-70 hover:bg-primary-10 hover:text-primary-60';
    const handleEnter = (index) => {
        setHoveredIndex(index)
    }
    const handleExit = () => {
        setHoveredIndex(null)
    }
    const filteredNav = navigation.filter(nav => {
        if (!user.isAdmin){
            return nav.title !== "Feedback and Reviews"
        }
        else {
            return nav
        }
    })
    return ( 
            <>
                <div className={`hidden md:block h-screen w-fit py-4 ${user.isAdmin ? "bg-primary-50" : "bg-primary-60 "}`}>
                    {/* keeping the sidebar on small screens for admin because we are focused on mobile responsiveness for basic user for now */}

                    {/* {
                        !user.isAdmin && (
                            <div className="flex gap-2 text-white ml-16">
                                <img src="/images/logo.png" alt="Logo" />
                                <h1 className="font-bold">Consuelo</h1>
                            </div>
                        )
                    } */}
                    <ul className='flex flex-col justify-between items-start gap-5 mt-10'>
                        {
                            filteredNav.map((nav, idx) => {
                                return (
                                    <li key={nav.id} onMouseEnter={() => handleEnter(nav.id)} onMouseLeave={() => handleExit()}  className={`transition duration-700 ease-in-out py-3 px-5 w-full border-l-8 cursor-pointer ${location === nav.path ? active : inactive}` }>

                                        <Link to={nav.path}>
                                            <div className='flex gap-2 items-center'>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                                    {nav.svg.path.map(icon => {
                                                        return <path key={icon} d={icon} stroke={hoveredIndex === nav.id || location === nav.path  ? '#2C6E49' : 'white'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    })}
                                                </svg>
                                            
                                                <p className='ml-4'>{nav.title}</p>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                {/* Only show the nav bar below for basic user and for mobile screens */}
                {!user.isAdmin &&

                    <>
                    {/* mobile nav */}

                    <div className="md:hidden">

                        <div onClick={onHamburger} className={`md:hidden fixed z-50 top-6 left-5  w-[35px] h-[24px] flex flex-col justify-center cursor-pointer `}>
                            <div className={`mb-1  w-6 h-[2px] transition-all duration-150 ease-in bg-black ${hamburgerOpen ? 'rotate-45 translate-y-1 bg-white' : undefined}`}></div>
                            <div className={`w-6 h-[2px] transition-all duration-150 ease-in bg-black ${hamburgerOpen ? 'opacity-0' : undefined}`}></div>
                            <div className={`mt-1 w-6 h-[2px] transition-all duration-150 ease-in bg-black ${hamburgerOpen ? '-rotate-45 -translate-y-2 bg-white' : undefined}`}></div>
                        </div>

                    </div>
 
                    <div className={`md:block fixed z-40 top-0 left-0 h-screen bg-primary-60 py-4 transition-all ease-in duration-500  ${hamburgerOpen ? "translate-x-0" : '-translate-x-[200%]'}`}>
                        
                        <div className='relative top-2 flex items-center justify-end pr-6'>
                            <img src="/images/logo.png" alt="Logo" />
                            <h1 className="font-bold text-white ml-2">Consuelo</h1>
                        </div>

                        <ul  className='flex flex-col justify-between items-start pt-10 gap-5 mt-10'>
                            {
                                filteredNav.map((nav, idx) => {
                                    return (
                                        <li key={nav.id} onMouseEnter={() => handleEnter(nav.id)} onMouseLeave={() => handleExit()}  className={`transition duration-700 ease-in-out py-3 px-5 w-full border-l-8 cursor-pointer ${location === nav.path ? active : inactive}` }>

                                            <Link to={nav.path} onClick={ hamburgerOpen ? () => onHamburger() : undefined} >
                                                <div className='flex gap-2 items-center'>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                                        {nav.svg.path.map(icon => {
                                                            return <path key={icon} d={icon} stroke={hoveredIndex === nav.id || location === nav.path  ? '#2C6E49' : 'white'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        })}
                                                    </svg>
                                                
                                                    <p className='ml-4'>{nav.title}</p>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                    </>
                }
            </>
     );
}
 
export default SideBar;