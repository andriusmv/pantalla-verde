import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import LogoutButton from '../logout-button'
import styles from '../page.module.css'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className={styles.main}>
      <h1>
        <span>Esta es tu cuenta</span>
      </h1>

      <div className={styles.main}>
        <span>
          {user ? (
            <span>
              Hola, {user.email}! <span></span>{' '}
              <br />
              <LogoutButton />
            </span>
          ) : (
            <div className={styles.container}>
              <p>No has iniciado sesión: {''}</p>
            <Link href="/login">
              <span className='button-accent-normal'>
              Iniciar sesión</span>
            </Link></div>
          )}
        </span>
      </div>

      
    </div>
  )
}