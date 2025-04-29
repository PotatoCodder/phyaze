'use client'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

interface Prop {
  children: React.ReactNode
}

export default function QueryProvider({children} : Prop) {
  return(
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}