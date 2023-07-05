'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import styles from '../page.module.css'

import type { Database } from '../../lib/database.types';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [view, setView] = useState('sign-in')
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    setView('check-email')
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
    router.push('/')
  }

  return (
    <div className="main">
      {view === 'check-email' ? (
        <p>
          Revisa <span>{email}</span> para
          continuar con tu registro
        </p>
      ) : (
        <form
          className={styles.main}
          onSubmit={view === 'sign-in' ? handleSignIn : handleSignUp}
        >
          <label className={styles.description2} htmlFor="email">
            Email
          </label>
          <input
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="email@ejemplo.com"
          />
          <label htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="••••••••"
          />
          {view === 'sign-in' ? (
            <>
              <button>
                Iniciar
              </button>
              <p>
                ¿No tienes usuario? 
                <button
                  onClick={() => setView('sign-up')}
                >
                  Crear uno
                </button>
              </p>
            </>
          ) : null}
          {view === 'sign-up' ? (
            <>
              <button>
                Crear usuario
              </button>
              <p>
                ¿Ya tienes una cuenta?
                <button
                  onClick={() => setView('sign-in')}
                >
                  Inicia sesión
                </button>
              </p>
            </>
          ) : null}
        </form>
      )}
    </div>
  )
}