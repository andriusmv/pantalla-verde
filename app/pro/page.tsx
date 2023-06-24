import Link from 'next/link'
import '../globals.css'

export default function Pro() {
    return(
        <main>
        <h1>Pro<span > /$99</span></h1>
        
        <p>Vuélvete Pro y disfruta de:</p>
        <ul>
            <li>Un único pago</li>
            <li>Acceso vitalicio</li>
            <li>Cursos actuales y futuros</li>
            <li>Información privilegiada a tu correo</li>
        </ul>
        <Link href="https://buy.stripe.com/aEU4gVbPV47C4BqdQR">
              <span className='button-accent-pro'>Hacerse Pro por $99</span>
        </Link>
        <hr data-content="OR"/>
        <h1>Curso Tours Virtuales<span > /$29</span></h1>
        
        <p>Vuélvete Pro y disfruta de:</p>
        <ul>
            <li>Un único pago</li>
            <li>Acceso por 1 año</li>
            <li>Curso Tours Virtuales</li>
        </ul>
        <Link href="https://buy.stripe.com/8wMdRv5rx5bGec04gg">
              <span className='button-accent-pro'>Comprar curso por $29</span>
        </Link>
        </main>
        

    );
}