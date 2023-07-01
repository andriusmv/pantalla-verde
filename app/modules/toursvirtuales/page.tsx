import supabase from "../../../utils/supabase";
import Link from "next/link";
import styles from '../page.module.css';
import {
    createServerActionClient,
    createServerComponentClient,
  } from '@supabase/auth-helpers-nextjs'
  import { cookies } from 'next/headers'
  import Image from 'next/image'
  import { redirect } from 'next/navigation'

export default async function ToursVirtuales() {
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

    const { data: module } = await supabase.from("module").select().in('course_id', ['toursvirtuales']);
  
    if (!module) {
    return <p>No posts found.</p>;
  }

  return (
    <>
    <div className={styles.grid}>
      {module.map((module) => (
        <Link key={module.id} href={`/modules/toursvirtuales/${module.id}`} className={styles.card}>
          <i>{module.course_id}</i>
          <h2>{module.title}</h2>
          <p>{module.subtitle}</p>
        </Link>))}
      </div>
      </>
    )}