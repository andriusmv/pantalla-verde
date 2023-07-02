import Link from 'next/link'
import '../globals.css'
import styles from '../page.module.css'
import {
    createServerActionClient,
    createServerComponentClient,
  } from '@supabase/auth-helpers-nextjs'
  import { cookies } from 'next/headers'
  import Image from 'next/image'
  import { redirect } from 'next/navigation'


export default async function Pro() {
    const supabase = createServerComponentClient({ cookies })

    const {
      data: { user },
    } = await supabase.auth.getUser()
  
    if (!user) {
      // This route can only be accessed by authenticated users.
      // Unauthenticated users will be redirected to the `/login` route.
      redirect('/login')
    }
  
    const signOut = async () => {
      'use server'
      const supabase = createServerActionClient({ cookies })
      await supabase.auth.signOut()
      redirect('/login')
    }
    
    return(
      <main className={styles.main}>
        <div className={styles.grid}>
        <div className={styles.card2}>
      <h1>Pro</h1>
      
      <p>Vuélvete Pro y disfruta de:</p>
      <ul>
          <li>Un único pago</li>
          <li>Todos los cursos actuales y futuros</li>
          <li>Acceso indefinido</li>
          <li>Información privilegiada a tu correo</li>
      </ul>
      <Link href="https://buy.stripe.com/aEU4gVbPV47C4BqdQR">
            <span className='button-accent-pro'>Hacerse Pro</span>
      </Link>
      </div>
      <div className={styles.card2}>
      <h1>Curso Tours Virtuales</h1>
      
      <p>Acceso al curso:</p>
      <ul>
          <li>Un único pago</li>
          <li>Curso Tours Virtuales</li>
          <li>Acceso por 1 año</li>
          <li>...</li>
      </ul>
      <Link href="https://buy.stripe.com/8wMdRv5rx5bGec04gg">
            <span className='button-accent-pro'>Comprar curso</span>
      </Link>
      </div>
      </div>
      </main>
      

  );
}