import React, { useEffect, useState } from 'react'
import Layout from './components/layout'
import Head from 'next/head'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"



const Login = () => {

    const [credentials, setCredentials] = useState(
        {
            email: "",
            password: ""
        }
    )

    const handleChange = (name, value) => {
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    }

        const handleLoginclick =(e)=>{
            e.preventDefault();
            console.log(credentials);
        }



    const handleGoogleSignin = () => {
        signIn('google', { callbackUrl: "http://localhost:3000" })
    }
    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>
            <section className='w-3/4 ms-auto flex flex-col'>
                <div>
                    <h1>Explore</h1>
                    <p>- event compiled client and server successfully in 325 ms (179 modules)</p>
                </div>

                <form className='flex flex-col gap-4 my-4'>
                    <div className='input-group'>
                        <input className='border rounded' value={credentials.username} onChange={(e) => handleChange(e.target.name, e.target.value)} type="email" name="email" placeholder="email"></input>
                    </div>

                    <div className='input-group'>
                        <input className='border rounded' value={credentials.password} onChange={(e) => handleChange(e.target.name, e.target.value)} type="password" name="password" placeholder="password"></input>
                    </div>

                    <div className='input-button'>
                        <button onClick={handleLoginclick} type="submit">Login</button>


                    </div>
                    <div className='input-button'>
                        <button className='border p-2 rounded' type="button" onClick={handleGoogleSignin}>Login with Google </button>


                    </div>
                    <div className='input-button'>
                        <button className='border p-2 rounded' type="button">Login with Github</button>


                    </div>

                    <div>
                        <p>Dont have an account? <Link className='text-blue-600' href="/register">
                            Signup
                        </Link></p>
                    </div>
                </form>

            </section>
        </Layout>
    )
}

export default Login