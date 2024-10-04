import { Link } from '@nextui-org/link';
import RegisterForm from './client.form';

export default async function Register() {
  return (
    <div
      className="grid place-items-center"
      style={{ height: 'calc(100vh - 120px)' }}
    >
      <div className="w-[300px] flex flex-col">
        <h1 className="text-3xl font-semibold mb-6 text-center">Registro</h1>
        <RegisterForm />
        <span className="flex justify-between items-center mt-4 gap-2 text-sm">
          <p>Ya tienes cuenta?</p>
          <Link href="/login" className="cursor-pointer">
            Inicia Sesión
          </Link>
        </span>
      </div>
    </div>
  );
}
