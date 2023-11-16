import { Montserrat } from 'next/font/google'


const Mont = Montserrat({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Manabou - Aprendizaje',
//   description: 'Manabou es la guia definitica pra iniciar tus estudios en el idioma japonés.',
// }

export default function Layout({ children }) {
  return (
    <html lang="es">
      <body className={Mont.className}>{children}</body>
    </html>
  )
}
