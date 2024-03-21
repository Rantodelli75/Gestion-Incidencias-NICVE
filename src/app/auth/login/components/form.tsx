'use client';

import Button from '@/app/components/ui/button';
import Input from '@/app/components/ui/input';
import { useRouter } from 'next/navigation';

import { RiGoogleFill, RiFacebookFill, RiGithubFill } from 'react-icons/ri';

const Form = () => {
  const router = useRouter();

  return (
    <div className='w-full max-w-md'>
      <div className='mb-5'>
        <h2 className='text-2xl font-semibold'>Iniciar sesión</h2>
        <p className='text-gray-500 text-sm'>
            Ingrese su correo y contraseña para ingresar
        </p>
      </div>
      <form className='w-full'>
        <Input type='text' placeholder='Email' />
        <Input type='password' placeholder='Contraseña' />
        <div className='flex justify-end mb-5'>
          <button
            type='button'
            onClick={() => router.push('/auth/forgot-password')}
            className='text-gray-500 hover:text-primary transition-colors duration-300'
          >
            ¿Olvidó su contraseña?
          </button>
        </div>
<<<<<<< HEAD
        <Button type='submit' label='Iniciar sesion' />
=======
        <Button type='submit' label='Inciar sesión' />
>>>>>>> 95c21e814f2261f601368ec65275706a7eb774ff
        <div className='mt-5 mb-10 flex items-center justify-center gap-x-2'>
          <p className='text-gray-500'>¿No tienes cuenta?</p>
          <button
            type='button'
            onClick={() => router.push('/auth/register')}
            className='font-semibold hover:text-primary transition-colors duration-300'
          >
            Regístrate
          </button>
        </div>
        <div className='mb-5'>
          <hr className='border-2' />
          <div className='flex justify-center'>
            <span className='bg-white px-8 -mt-3'></span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
