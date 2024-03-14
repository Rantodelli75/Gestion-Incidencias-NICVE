import type { Metadata } from 'next';
import Logo from '@/app/components/shared/logo';
import Form from './components/form';

export const metadata: Metadata = {
  title: 'Iniciar Sesión',
  description: 'Iniciar Sesión',
};

export default function Login() {
  return (
    <section className='h-full flex flex-col items-center justify-center'>
      <Logo />
      <Form />
    </section>
  );
}
