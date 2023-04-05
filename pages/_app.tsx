import '@/styles/globals.scss';
import '@/styles/variables.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {

  // ESTABLECE LA VARIABLE DE ENTORNO PARA EL SCSS
  if (typeof window !== 'undefined') {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    window.document.documentElement.style.setProperty('--base-path', basePath);
  }

  return <Component {...pageProps} />;
}
