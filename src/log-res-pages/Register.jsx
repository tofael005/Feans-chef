import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';

const Register = () => {
    const {createUser} = useAuth()
    const [success, setSuccess] = useState(" ")
    const [error, setError] = useState(" ")
    const handleRegister = (e)=>{
        e.preventDefault()

        setSuccess(" ")
        setError(" ")

        const form = e.target
        const fName = form.fName.value;
        const lName = form.lName.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value

        if (password.length < 6) {
            return
        }
        createUser(email, password)
        .then(result=>{
            const currentUser = result.user
            console.log(currentUser)
            e.target.reset()
            setSuccess("Registration success fully")
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
        })
    }
    return (
        <main className="max-w-[1240px] mx-auto mt-32 mb-32">
            <div className="md:w-[500px] mx-auto bg-slate-200 p-8 rounded-md shadow-md">
                    <h1 className="text-center text-5xl font-semibold">Register</h1>
                <form onSubmit={handleRegister}>
                    <input className="w-full p-3 rounded mt-5" type="text" name='fName' placeholder="First Name" required />
                    <input className="w-full p-3 rounded mb-6 mt-5" type="text" name='lName' placeholder="Last Name" required /> <br />
                    <input className="w-full p-3 rounded mb-6" type="email" name='email' placeholder="Enter your email" required /> <br />
                    <input className="w-full p-3 rounded mb-6" type="password" name='password' placeholder="Enter your password" required /> <br />
                    <input className="w-full p-3 rounded mb-10"type="text" name='photo' placeholder="Photo url" required />
                    <p className="text-xl text-center text-green-700 mb-5">{success}</p>
                    <p className="text-xl text-center text-red-700 mb-5">{error}</p>
                    <button className="w-full bg-[#d77002] text-white p-3 rounded font-semibold mb-5">Register</button>
                    <div className="text-center">
                        Already have an account?
                    <Link to="/login" className="px-2  py-1 ml-2 text-blue-700 underline rounded font-semibold">Login</Link>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Register;