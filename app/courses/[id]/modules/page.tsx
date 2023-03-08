// "use client"

import supabase from "../../../../utils/supabase";
import { notFound } from "next/navigation";
import MuxPlayer from '@mux/mux-player-react'
import Link from "next/link";
import styles from '../page.module.css';
import Player from "../../../player";


export default async function Modules() {
  const { data: module } = await supabase.from("module").select("id, course_id, title, description");

  if (!module) {
    return <p>No posts found.</p>;
  }

  return (
    <div className={styles.sidebar}>
      <aside className={styles.sidebar__sidebar}>
      <ul>
      <li>
        <h2>Módulo 1</h2>
      </li>
      <li>
        <h2>Módulo 2</h2>
      </li>
      <li>
        <h2>Módulo 3</h2>
      </li>
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
  );
  }
  
  {/* <div className={styles.sidebar}>
    <aside className={styles.sidebar__sidebar}>

    </aside>

    <main className={styles.sidebar__main}>
      <MuxPlayer
        playbackId="oKthiMVIMEKXJZcojBlvzI55002gsIWEwYH00mBCP5Zao"
        metadata={{
          video_id: 'fO0101O00KgKEVbWLe2tY552HMcQ02XmnuvFvOgAIvCStQI',
          video_title: 'Bick Buck Bunny',
          viewer_user_id: 'user-id-bc-789',
        }}
        streamType="on-demand" />
    </main>
  </div> */}
