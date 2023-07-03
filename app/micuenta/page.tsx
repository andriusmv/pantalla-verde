import { createServerActionClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import LogoutButton from '../logout-button'
import styles from '../page.module.css'

export default async function Index() {
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

  return (
    <div className={styles.main}>
      <h1>
        <span>Esta es tu cuenta</span>
      </h1>

      <div className={styles.main}>
        <span>
            <div className={styles.container}>
              <span>
              ¡Hola, {user.email}! <br /><span>Tu id es {user.id}</span>{' '}
              <br />
            </span>
              <LogoutButton />
              </div>
        </span>
      </div>

      
    </div>
  )
}