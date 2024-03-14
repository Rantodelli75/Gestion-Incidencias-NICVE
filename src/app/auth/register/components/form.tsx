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
        <h2 className='text-2xl font-semibold'>Regístrate</h2>
      </div>
      <form id='register-form' className='w-full'>
        <Input type='text' placeholder='Nombre' />
        <Input type='text' placeholder='Email' />
        <Input type='password' placeholder='Contraseña' />
        <Input type='password' placeholder='Confirme su contraseña' />
        <Button type='submit' label='Crear cuenta' />
        <div className='mt-5 mb-10 flex items-center justify-center gap-x-2'>
          <p className='text-gray-500'>¿Tienes una cuenta?</p>
          <button
            type='button'
            onClick={() => router.push('/auth/login')}
            className='font-semibold hover:text-primary transition-colors duration-300'
          >
            Iniciar
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
