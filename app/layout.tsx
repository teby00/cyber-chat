import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';

import { Toaster } from 'sonner';

import { getSession } from '@/lib/getSession';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'CyberChat',
  description: 'En que te puedo ayudar?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = getSession();
  return (
    <html lang="es" className="dark">
      <body>
        <Toaster
          position="top-center"
          toastOptions={{
            unstyled: true,
            classNames: {
              success:
                'bg-[#18181b] rounded-lg text-success p-4 flex items-center gap-2 border border-success-400 shadow-sm',
              error:
                'bg-[#18181b] rounded-lg text-danger p-4 flex items-center gap-2 border border-danger-400 shadow-sm',
            },
          }}
        />
        <Navbar session={session} />
        <main className="relative z-10 container flex-grow">
          <Providers>{children}</Providers>
        </main>
        <div
          aria-hidden="true"
          className="fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-0"
        >
          <Image
            width={1266}
            height={1211}
            priority
            src="/docs-left.png"
            className="relative z-0 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
            alt="docs left background"
            data-loaded="true"
          />
        </div>
        <div
          aria-hidden="true"
          className="fixed hidden dark:md:block dark:opacity-70 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12"
        >
          <Image
            width={1833}
            height={1822}
            priority
            src="/docs-right.png"
            className="relative z-0 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
            alt="docs right background"
            data-loaded="true"
          />
        </div>
      </body>
    </html>
  );
}
