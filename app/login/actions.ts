'use server';

import { InferInput } from 'valibot';
import { LoginSchema } from '@/lib/schemas';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(
  data: InferInput<typeof LoginSchema>
): Promise<string | undefined> {
  const response = await fetch(process.env.BACKEND_URL! + 'login/', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    if (response.status === 401) {
      return 'Usuario o contraseña incorrectos';
    }
  }
  const res = await response.json();

  cookies().set('session', res.token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  });

  redirect('/');
}