'use client'

import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      <h1 className='text-3xl font-bold'>Login Page</h1>
      <button
        className='bg-blue-600 text-white px-4 py-2 rounded'
        onClick={() => signIn('google')}
      >
        Sign in with Goofle
      </button>
    </div>
  )
}
