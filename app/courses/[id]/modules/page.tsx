// "use client"

import supabase from "../../../../utils/supabase";
import styles from './/page.module.css';

const id = 'integracion'

export default async function Modules() {
  const { data: module } = await supabase.from("module").select().in('course_id', [id]);

  if (!module) {
    return <p>No posts found.</p>;
  }

  return (
      <>
      <div className={styles.sidebar}>
      <aside className={styles.sidebar__sidebar}>
        <ul>{module.map((module) => (
          <li key={module.id}>
            <h2>{module.title}</h2>
          </li>))}
        </ul>
      </aside>
        <main className={styles.sidebar__main}>
          {module.map((module) => (
            <div key={module.id}>
              {module.video_url}
            </div>))}
        </main>
    </div>
      </>
      
      
      )}
      
  
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
