import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Login = () => {

    const { signIn, signInWithGoogle, signInWithGithub } = useAuth()

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || "/"

    const hendleForm = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value


        if (!email || !password) {
            return
        }

        if (password.length < 6) {
            return
        }

        signIn(email, password)
            .then(() => {
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogle = ()=>{
        signInWithGoogle()
        .then(()=>{
            navigate(from)
        })
        .catch(()=>{})
    }

    const handleGithub = ()=>{
        signInWithGithub()
        .then(() =>{
            navigate(from)
        })
        .catch(()=>{})
    }
    return (
        <section className='border rounded-xl p-[25px] max-w-[500px] mx-auto mt-36 mb-24 shadow-md bg-slate-200'>
            <h2 className='text-center text-4xl font-semibold'>Login Please</h2>
            <form onSubmit={hendleForm}>
                <div className='flex flex-col my-4'>
                    <label htmlFor="email" className='text-[17px] font-semibold p-1'>User-email</label>
                    <input type="email" name="email" id="email" className='border rounded p-3 text-base' autoComplete='off' placeholder='Enter your email' required />
                </div>
                <div className='flex flex-col my-4'>
                    <label htmlFor="password" className='text-[17px] font-semibold p-1'>Password</label>
                    <input type="password" name="password" id="password" className='border rounded p-3 text-base' autoComplete='off' placeholder='Enter your password' required />
                </div>


                <button type='submit' className='bg-[#d77002] text-white w-full p-3 text-[21px] rounded mt-[10px]'>Login</button>
                <p className='mt-[8px] text-center'>Create a new account? <Link to="/register" className='text-blue-700 underline'>Register Now</Link></p>
                <div className='flex items-center justify-between mt-[25px] '>
                    <hr className='w-[45%] bg-[#95A0A7]' />
                    <p className='text-[#95A0A7]'>Or</p>
                    <hr className='w-[45%] bg-[#95A0A7]' />
                </div>
                <div className="flex gap-4 mb-7">
                    <div onClick={handleGoogle} className='p-[10px] bg-blue-200 cursor-pointer border rounded w-full flex justify-center items-center gap-[6px] mt-[33px]'><FcGoogle className='text-[32px]' /><span>Continue with Google</span></div>
                    <div onClick={handleGithub} className='p-[10px] bg-blue-200  cursor-pointer rounded w-full flex justify-center items-center gap-[6px] mt-[33px]'><BsGithub className='text-[32px]' /><span>Continue with GitHub</span></div>
                </div>
            </form>
        </section>
    );
};

export default Login;