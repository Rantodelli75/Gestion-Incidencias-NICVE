'use client';

import Button from '@/app/components/ui/button';
import ButtonIcon from '@/app/components/ui/button-icon';
import Input from '@/app/components/ui/input';
import { useRouter } from 'next/navigation';

import { RiGoogleFill, RiFacebookFill, RiGithubFill } from 'react-icons/ri';

const Form = () => {
  const router = useRouter();

  return (
    <div className='w-full max-w-md'>
      <div className='mb-5'>
        <h2 className='text-2xl font-semibold'>olvido su contraseña?</h2>
        <p className='text-gray-500 text-sm'>
          Ingrese su correo y contraseña 
        </p>
      </div>
      <form className='w-full'>
        <Input type='text' placeholder='Email' />
        <Button type='submit' label='Enviar correo' />
        <div className='mt-5 mb-5 flex items-center justify-center gap-x-2'>
          <p className='text-gray-500'>tienes una cuenta?</p>
          <button
            type='button'
            onClick={() => router.push('/auth/login')}
            className='font-semibold hover:text-primary transition-colors duration-300'
          >
            Iniciar
          </button>
        </div>
        <div className='flex items-center justify-center gap-x-2'>
          <p className='text-gray-500'>no tienes una cuenta?</p>
          <button
            type='button'
            onClick={() => router.push('/auth/register')}
            className='font-semibold hover:text-primary transition-colors duration-300'
          >
            Registrarte
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
