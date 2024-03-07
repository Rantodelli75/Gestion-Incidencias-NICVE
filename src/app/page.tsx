'use client'
import React, {useEffect } from 'react';
import { useRouter } from 'next/navigation'
const LoginRegister: React.FC = () => {
  const { push } = useRouter()
  
  useEffect(() => {
    push('auth/login')
  })
return (<p></p>)
}
export default LoginRegister;
