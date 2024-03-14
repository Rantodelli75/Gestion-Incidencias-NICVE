import type { Metadata } from 'next';
import Logo from '@/app/components/shared/logo';
import Form from './components/form';

export const metadata: Metadata = {
  title: 'Cambiar Contraseña',
  description: 'Forgot Password | Auth',
};

export default function ForgotPassword() {
  return (
    <section className='h-full flex flex-col items-center justify-center'>
      <Logo />
      <Form />
    </section>
  );
}
