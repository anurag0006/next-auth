import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import { getSession, useSession, signOut } from "next-auth/react"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()


  const handleSignout = () =>{
    signOut();
  }

  return (
    <div>
      {session ? user({ session, handleSignout }) : guest()}
    </div>
  )
}


//guest
function guest() {
  return (
    <div>
      <div>Guest</div>
      <Link href="/login">Sign in</Link>
    </div>
  )
}


//authorized user
const user = ({ session, handleSignout }) => {
  return (
    <div className='flex flex-col gap-6'>
      <div>
        <div>authorized user home page</div>
        <div>
          <p>{session.user.name}</p>
          <p>{session.user.email}</p>
        </div>

        <div className='cursor-pointer' onClick={handleSignout}>Logout</div>
        <Link href="/profile">Profile page</Link>
      </div>
    </div>

  )
}


export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if(!session){
    return{
      redirect:{
        destination:"/login",
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }

}