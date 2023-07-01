import supabase from "../../utils/supabase";
import { notFound } from "next/navigation";
import MuxPlayer from '@mux/mux-player-react'
import Link from "next/link";
import Player from "../player";
import styles from '../page.module.css';
import '../globals.css'
import {
    createServerActionClient,
    createServerComponentClient,
  } from '@supabase/auth-helpers-nextjs'
  import { cookies } from 'next/headers'
  import Image from 'next/image'
  import { redirect } from 'next/navigation'


export default async function Modules() {
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
  
  const { data: module } = await supabase.from("module").select("*").order('course_id', { ascending: false });

  if (!module) {
    return <p>No posts found.</p>;
  }

  return (
    <>
    <div className={styles.grid}>
      {module.map((module) => (
        <Link key={module.id} href={`/modules/${module.id}`} className={styles.card}>
          <i>{module.course_id}</i>
          <h2>{module.title}</h2>
          <p>{module.subtitle}</p>
        </Link>))}
      </div>
      </>
    )}


    // <div className={styles.playerWrapper}>
    // <Player
    //   playbackId="oKthiMVIMEKXJZcojBlvzI55002gsIWEwYH00mBCP5Zao"
    //   placeholder="fO0101O00KgKEVbWLe2tY552HMcQ02XmnuvFvOgAIvCStQI"
    //   aspectRatio={"16/9"} />
    // </div>