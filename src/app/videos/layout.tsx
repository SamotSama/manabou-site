import ScrollToTopButton from "../components/ScrollToTopButton"

export const metadata = {
  title: 'Manabou - Cursos y Videos',
  description: 'Manabou es la guia definitica pra iniciar tus estudios en el idioma japonés.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <ScrollToTopButton />
    </>
  )
}