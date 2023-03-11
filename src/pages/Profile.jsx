import { useState } from 'react';
import Button from '../components/common.jsx/button';
import Input from '../components/common.jsx/Input';
import Layout from '../layout/Layout';

const Profile = () => {
    const tabItems = ["My details", "Password"];
    const [selectedItem, setSelectedItem] = useState(0);
    return ( 
        <Layout>
            <div className='bg-[#F9FAFB] p-4'>
                <h1 className='heading-4'>Profile Setting</h1>


                <ul role="tablist" className="max-w-screen-xl mx-auto border-b flex items-center gap-x-3 overflow-x-auto text-sm">
                    {
                        tabItems.map((item, idx) => (
                            <li key={item} className={`py-2 border-b-2 ${selectedItem == idx ? "border-primary-50 text-primary-50" : "border-white text-gray-500"}`}>
                                <button
                                    role="tab"
                                    aria-selected={selectedItem == idx ? true : false}
                                    aria-controls={`tabpanel-${idx + 1}`}
                                    className="py-2.5 rounded-lg duration-150 hover:primary-50 hover:bg-gray-50 active:bg-gray-100 font-medium"
                                    onClick={() => setSelectedItem(idx)}
                                >
                                    {item}
                                </button>
                            </li>
                        ))
                    }
                </ul>


                {
                    tabItems[selectedItem] === 'Password' && (
                        <div className='mt-4'>
                            <h2 className='font-bold '>Password</h2>
                            <p className='text-gray-10'>Please update your password settings here</p>

                            <form action="/" className='mt-4 space-y-6'>
                                <Input name={'currentPassword'} type="password" label="Current password" placeholder="**********"/>
                                <Input name={'newPassword'} type="password" label="New Password" placeholder="**********"/>
                                <Input name={'confirmNewPassword'} type="password" label="Confirm password" placeholder="**********"/>

                                <div className='flex justify-end gap-2'>
                                    <Button size="" variant='light'>
                                        Cancel
                                    </Button>
                                    <Button size="" variant='light'>
                                        Update Password
                                    </Button>
                                </div>
                            </form>
                        </div>
                    )
                }
                
                {
                    tabItems[selectedItem] === 'My details' && (
                        <div className='mt-4'>
                            <h2 className='font-bold '>Personal info</h2>
                            <p className='text-gray-10'>Update your photo and personal details here.</p>

                            <form action="/" className='mt-4 space-y-6'>
                                <Input name={'name'} type="text" label="Name" placeholder="**********" count={2}/>
                                <Input name={'email'} type="email" label="Email" placeholder="olivia@untitledui.com"/>
                                <Input name={'phone'} type="text" label="Phone Number" placeholder="08127878919"/>

                                <div className='flex justify-end gap-2'>
                                    <Button size="" variant='light'>
                                        Cancel
                                    </Button>
                                    <Button size="" variant='light'>
                                        Update Password
                                    </Button>
                                </div>
                            </form>
                        </div>
                    )
                }
            </div>
        </Layout>
     );
}
 
export default Profile;