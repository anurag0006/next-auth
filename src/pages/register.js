import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from './components/layout'
import Link from 'next/link'

const Register = () => {

    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })


    const handleChange = (name, value) => {
        setCredentials((prev) => ({
            ...prev, [name]: value
        }))
    }

    const handleRegisterClick =()=>{
        console.log(credentials);
    }



    return (
        <Layout>
            <Head>
                <title>Register</title>
            </Head>
            <div className='flex flex-col gap-4 p-4'>
                <input value={credentials.username} onChange={(e) => handleChange(e.target.name, e.target.value)} name="username" className='p-2 border rounded' placeholder='username'></input>
                <input value={credentials.email} onChange={(e) => handleChange(e.target.name, e.target.value)} name="email" className='p-2 border rounded' placeholder='email'></input>
                <input value={credentials.password} onChange={(e) => handleChange(e.target.name, e.target.value)} className='p-2 border rounded' name='password' placeholder='password'></input>
                <input value={credentials.confirmPassword} onChange={(e) => handleChange(e.target.name, e.target.value)} className='p-2 border rounded' name='confirmPassword' placeholder='confirm password'></input>
                <button className='p-2 border rounded' type='submit'>Register</button>
                <p>Already have an account?
                    <Link onClick={handleRegisterClick} className='text-blue-600' href="/login">
                        Login
                    </Link></p>
            </div>
        </Layout>

    )
}

export default Register