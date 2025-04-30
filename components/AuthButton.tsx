'use client'

import { signOut, useSession } from 'next-auth/react'

export default function AuthButton() {
  const { data: session } = useSession();

  if (!session) return null

  return (
    <button
      className='mt-4 bg-red-500 text-white px-4 py-2 rounded'
      onClick={() => signOut()}  
    >
      SignOut
    </button>
  )
}
