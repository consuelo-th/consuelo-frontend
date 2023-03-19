import { useState, useRef, useEffect } from "react";
import Notification from "./Notification";
import { Link } from "react-router-dom";
import user from "../services/user";


export default () => {
    const [showNotification, setShowNotification] = useState(false);
    const headerStyle = 

    function toggleNotification () {
        setShowNotification(!showNotification)
    }

    if (user.isAdmin) {
        return (
            <div className="w-screen py-4 px-6 bg-primary-60 text-white flex justify-between items-center relative">
                <div className="flex justify-between items-center gap-2">
                    <img src="/images/logo.png" alt="Logo" />
                    <h1 className="font-bold">Consuelo</h1>
                </div>

                <div className="flex justify-between items-center gap-2">
                    <div onClick={() => toggleNotification()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>

                        { showNotification && <Notification /> }
                    </div>

                    <Link to="/me">
                        <img
                            src="https://randomuser.me/api/portraits/men/46.jpg"
                            className="rounded-full cursor-pointer"
                            width={32}
                        />
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="w-screen py-4 px-6 bg-white flex justify-between items-center relative">
            <div className="flex justify-between items-center gap-2">
                <img src="/images/logo.png" alt="Logo" />
                <h1 className="font-bold">Consuelo</h1>
            </div>

            <div className="flex justify-between items-center gap-2">
                <div onClick={() => toggleNotification()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>

                    { showNotification && <Notification /> }
                </div>

                <div className="border border-primary-50 rounded-3xl p-1 pr-6">
                    <Link to="/me">
                        <img
                            src="https://randomuser.me/api/portraits/men/46.jpg"
                            className="rounded-full cursor-pointer"
                            width={24}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}