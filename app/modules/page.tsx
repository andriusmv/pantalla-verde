import supabase from "../../utils/supabase";
import { notFound } from "next/navigation";
import MuxPlayer from '@mux/mux-player-react'
import Link from "next/link";
import Player from "../player";
import styles from './page.module.css';


export default async function Modules() {
  const { data: module } = await supabase.from("module").select().in('course_id', ['toursvirtuales']);

  if (!module) {
    return <p>No posts found.</p>;
  }

  return (
    <div className={styles.sidebar}>
      <aside className={styles.sidebar__sidebar}>
    <ul>{module.map((module) => (
      <li key={module.id}>
        <h2>{module.title}</h2>
      
      </li>))}  
      </ul>
      </aside>
      <main className={styles.sidebar__main}>
      <div className={styles.playerWrapper}>
      <Player  
          playbackId="oKthiMVIMEKXJZcojBlvzI55002gsIWEwYH00mBCP5Zao"
          placeholder="fO0101O00KgKEVbWLe2tY552HMcQ02XmnuvFvOgAIvCStQI"
          aspectRatio={"16/9"}
          />
      </div>
    </main>
      </div>
    )}

