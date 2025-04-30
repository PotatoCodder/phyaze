'use client'

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react'

interface Prop {
  children: ReactNode
}

export default function SessionWrapper({ children }: Prop ) {
  return <SessionProvider>{children}</SessionProvider>
}