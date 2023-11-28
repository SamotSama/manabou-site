import { Montserrat } from 'next/font/google'
import './globals.css'
import NavBar from './components/navbar';
import Subscription from './components/Suscription';
import Footer from './components/Footer';


const Mont = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Manabou - Aprendizaje',
  description: 'Manabou es la guia definitica pra iniciar tus estudios en el idioma japonés.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={Mont.className}>
        <NavBar />
        {children}
        <Subscription />
        <Footer />
      </body>
    </html>
  )
}
