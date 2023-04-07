import React from "react"
import { useRouter } from 'next/navigation';
import useCurrent from '@/swr/current';

interface props {
  children: React.ReactNode
}


const PrivateRoutes = ({ children }: props) => {

  const router = useRouter();

  const { data } = useCurrent()

  if (!data?.user?.email) {
    router.push("/")
  }

  return (
    <>{children}</>
  )
}

export default PrivateRoutes