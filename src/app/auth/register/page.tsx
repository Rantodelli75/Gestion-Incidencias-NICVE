import type { Metadata } from 'next';
import Logo from '@/app/components/shared/logo';
import Form from './components/form';

export const metadata: Metadata = {
  title: 'Registrar Usuario',
  description: 'Registro de Usuario',
};

export default function Register() {
  return (
    <section className='h-full flex flex-col items-center justify-center'>
      <Logo />
      <Form />
    </section>
  );
}
