import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup"
import { logIn, signUp } from "../services/auth";
import getUser from "../services/user";
import { useNavigate } from "react-router-dom";



export default () => {
    const user = getUser();
    const [ currPage, setCurrPage ] = useState("login");
    const [ serverErrors, setServerErrors ] = useState([]);
    const navigate = useNavigate();
    let schema;

    if (currPage === "login") {
        schema = yup.object({
            email: yup.string().email().required("email is required"),
            password: yup.string().min(7, 'must be at least 3 characters long').required("password is required")
        });

    } else {
        schema = yup.object({
            firstName: yup.string().required("first name is required"),
            lastName: yup.string().required("last name is required"),
            email: yup.string().email().required("email is required"),
            password: yup.string().min(7, 'must be at least 3 characters long').required("password is required")
        });
    }

    const { handleSubmit, handleChange, handleBlur, touched, values, errors } = useFormik({
        initialValues:  {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }, 
        validationSchema: schema,
        onSubmit: async (values) => {

            if (currPage === "login") {
                delete values.firstName;
                delete values.lastName;
                
                try {
                    await logIn(values);
                    navigate("/dashboard");

                } catch(err) {
                    if (err.response && err.response.status >= 400) {
                        const errors = {...serverErrors};
                        console.log(err.message)
                    }

                }

            } else {
                try {
                    await signUp(values);
                    navigate("/dashboard")
    
                } catch(err) {
                    if (err.response && err.response.status >= 400) {
                        const errors = {...serverErrors};
                        console.log(err.message)
                    }
    
                }

            }

        }
    })

    if (localStorage.getItem("token")) {
        useEffect(() => {
            navigate("/dashboard")
        }, [])
    }

    function switchPage() {
        setCurrPage(() => {
            return currPage === "login" ? "signup" : "login"
        })

        console.log(currPage)
    }


    return (
        <div>
            <div className="w-screen py-4 px-6 bg-primary-60 text-white flex justify-start items-center relative">
                <div className="flex justify-between items-center gap-2">
                    <img src="/images/logo.png" alt="Logo" />
                    <h1 className="font-bold">Consuelo</h1>
                </div>
                
            </div>
            <main className="w-full min-h-screen flex justify-between bg-[#E5E5E5]">
                <div className="flex-1 flex items-center justify-center h-screen">
                    <div className="w-full max-w-sm space-y-4 px-6 sm:px-0">
                        <div className="">
                            <div className="mt-5 space-y-2 text-center lg:text-left">
                                <h3 className="text-primary-60 text-2xl font-bold sm:text-3xl">{currPage === "signup" ? "Create a new account" : "Sign into Consuelo"}</h3>
                                <p className="text-body text-sm">You're one step towards getting better!</p>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-center items-center">
                            <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                                <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_17_40)">
                                        <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                        <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                        <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                        <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_17_40">
                                            <rect width="48" height="48" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <p>Sign up with  Google</p>
                        </div>
                        <div className="relative">
                            <span className="block w-full h-px bg-gray-300"></span>
                            <p className="inline-block w-fit text-sm px-2 absolute -top-2 inset-x-0 mx-auto bg-[#E5E5E5]">Or</p>
                        </div>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-3"
                        >
                            {
                                currPage === "signup" && (
                                    <div>
                                        <label className="font-medium hidden">
                                            First Name
                                        </label>
                                        <input
                                            name="firstName"
                                            type="text"
                                            placeholder="First name"
                                            required
                                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-50 focus:ring-0 shadow-sm rounded-lg"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.firstName && errors.firstName ? <p className="text-sm text-error-text ml-3">{errors.firstName}</p> : null}
                                    </div>
                                )
                            }
                            {
                                currPage === "signup" && (
                                    <div>
                                        <label className="font-medium hidden">
                                            Last name
                                        </label>
                                        <input
                                            name="lastName"
                                            type="text"
                                            placeholder="Last name"
                                            required
                                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-50 focus:ring-0 shadow-sm rounded-lg"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.lastName && errors.lastName ? <p className="text-sm text-error-text ml-3">{errors.lastName}</p> : null}
                                    </div>
                                )
                            }
                            <div>
                                <label className="font-medium hidden">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-50 focus:ring-0 shadow-sm rounded-lg"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.email && errors.email ? <p className="text-sm text-error-text ml-3">{errors.email}</p> : null}
                            </div>
                            <div>
                                <label className="font-medium hidden">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-50 focus:ring-0 shadow-sm rounded-lg"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.password && errors.password ? <p className="text-sm text-error-text ml-3">{errors.password}</p> : null}
                            </div>
                            <div>
                                {currPage === "login" && <a href="#" className="text-sm text-[#4E5760]">Forgot Password?</a>}
                                {currPage === "signup" && <p className="font-bold text-sm text-[#4E5760]">Password must be up to 7 characters</p>}
                                {
                                    currPage === "signup" && (
                                        <p className="text-body text-sm">By signing up, you agree to the <a href="#" className="text-primary-60">Terms of Service and Privacy Policy</a>.</p>
                                    )
                                }
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white font-medium bg-primary-50 hover:bg-primary-60 rounded-lg duration-150"
                                onClick={handleSubmit}
                                
                            >
                               {currPage === "login" ? "Login" : "Create account"}
                            </button>

                            <div>
                                { currPage === "login" && <p className="text-body text-sm">Don't have an account? <a href="#" className="text-primary-60" onClick={switchPage}>Sign up</a></p>}
                                {currPage === "signup" && <p className="text-body text-sm">Already have an account? <a href="#" className="text-primary-60" onClick={switchPage}>Sign in</a></p>}
                            </div>
                        </form>
                    </div>
                </div>
                <div className="relative hidden items-center justify-center h-screen lg:flex">
                        <img src="/images/auth_frame.png" className="max-h-screen"/>
                </div>
            </main>
        </div>
    )
}