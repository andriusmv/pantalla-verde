import Link from 'next/link'
import './globals.css'
import { BiUserCircle } from "react-icons/Bi";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      
        <head>
          <title>
            Pantalla Verde | Tutoriales
          </title>
        </head>
      
      <body>
        <header className="primary-header flex">

          <div className="logo"><Link href="/">Pantalla Verde</Link></div>

          <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false"></button>
          <nav>
            <ul id="primary-navigation" data-visible="false" className="primary-navigation flex">
              <li>
            <Link href="/tutoriales">
              Cursos Gratis</Link>
              </li>
              <li>
            <Link href="/courses">
              Cursos Pro</Link>
              </li>
              <li>
            <Link href="/pro">
              <span className='button-accent-pro'>Hacerse Pro</span></Link>
              </li>
              <li>
            <Link href="/micuenta">
            <BiUserCircle size={25} /></Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
        {children}
        </main>
        </body>
    </html>
  )
}
