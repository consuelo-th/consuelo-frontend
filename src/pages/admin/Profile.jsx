import { useState } from 'react';
import Button from '../../components/common.jsx/button';
import Input from '../../components/common.jsx/input';
import Layout from '../../layout/Layout';
import avi from '../../assets/Avatar.png'
import upload from '../../assets/upload.svg'

const Profile = () => {
    const tabItems = ["My details", "Password"];
    const [selectedItem, setSelectedItem] = useState(0);
    return ( 
        <Layout>
            <div className='bg-[#F9FAFB] p-4 pl-6'>
                <h1 className='heading-4'>Profile Settings</h1>


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

                            <hr className='mt-4 mb-5 border border-gray-200 opacity-80' />

                            <form action="/" className='mt-4 space-y-6'>
                                <Input name={'currentPassword'} type="password" label="Current password" placeholder="**********" classname='max-w-3xl' inputclassname='w-[60%]'/>

                                <hr className='mt-4 mb-5 border border-gray-200 opacity-80' />

                                <Input name={'newPassword'} type="password" label="New Password" placeholder="**********" classname='max-w-3xl' inputclassname='w-[60%]' />

                                <hr className='mt-4 mb-5 border border-gray-200 opacity-80' />

                                <Input name={'confirmNewPassword'} type="password" label="Confirm password" placeholder="**********" classname='max-w-3xl' inputclassname='w-[60%]'/>
                                
                                <hr className='mt-4 mb-5 border border-gray-200 opacity-80' />


                                <div className='flex justify-end gap-2'>
                                    <Button size="" variant='outline'>
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
                            <p className='text-gray-10 py-2'>Update your photo and personal details here.</p>

                            <hr className='mt-4 mb-5 border border-gray-200 opacity-80' />

                            <form action="/" className='mt-4 space-y-6'>
                                <div className='flex gap-5 justify-between items-center max-w-3xl'>
                                    <p className=''>Full Name</p>
                                    <div className='flex space-x-3 gap-1 w-[66%]'>
                                        <input
                                            name='firstName'
                                            id='firstName' 
                                            placeholder='First Name'
                                            className="w-[48%] border focus:ring-0 border-gray-300 px-3 py-2 rounded-md outline-none focus:border-gray-300 focus:shadow-md"
                                        />
                                        <input
                                            name='lasttName'
                                            id='lastName' 
                                            placeholder='Last Name'
                                            className="w-[48%] border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-gray-300 focus:shadow-md"
                                        /> 
                                    </div>
                                </div>
                                <hr className='mt-4 mb-5 border border-[#E4E7EC]' />
                                {/* <Input name={'name'} type="text" label="Name" placeholder="**********" count={2}/> */}
                                <Input name={'email'} type="email" label="Email address" placeholder="olivia@untitledui.com" classname='max-w-3xl' inputclassname='w-[66%]' />

                                <hr className='mt-4 mb-5 border border-gray-200 opacity-80' />

                                <Input name={'phone'} type="text" label="Phone Number" placeholder="08127878919" classname='max-w-3xl' inputclassname='w-[66%]' />

                                <hr className='mt-4 mb-5 border border-gray-200 opacity-80' />

                                <div className="flex max-w-5xl">
                                    <div className="flex pl-0 p-6">
                                        <div className="">
                                            <p className='text-sm text-[#344054]'>Your Photo</p>
                                            <p className='text-sm text-[#667085]'>This will be displayed on your profile.</p>
                                        </div>
                                        <div className="ml-16">
                                            <img src={avi} alt="avi" />
                                        </div>
                                    </div>
                                    <div className="border border-gray-200 p-6 ml-5 w-[50%] bg-white">
                                        <label htmlFor='avatar' className='flex flex-col justify-center items-center cursor-pointer'>
                                            <input type="file" id="avatar" name="avatar" accept="image/*" className="hidden" />
                                            <img src={upload} alt="avi" />
                                            <p className=' font-medium' >
                                            <span className='text-primary-50 cursor-pointer hover:underline'> Click to upload </span>
                                            <span className='text-[#667085]'> or drag and drop</span>
                                            </p>
                                            <p className='text-sm text-[#667085]'>SVG, PNG, JPG or GIF (max. 800px)</p>
                                        </label>
                                    </div>
                                </div>

                                <hr className='mt-4 mb-5 border border-gray-200 opacity-80' />

                                <div className='flex justify-end gap-2'>
                                    <Button size="" variant='outline'>
                                        Cancel
                                    </Button>
                                    <Button size="" variant='light'>
                                        Save
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