import { notFound } from 'next/navigation';
import supabase from '../../../utils/supabase';
import Player from '../../player';
import styles from './/page.module.css';

export async function generateStaticParams() {
    const { data: module } = await supabase.from("module").select("id");
    const { data: moduleId } = await supabase.from("module").select().in('course_id', ['blender']);

  
    return module?.map(({ id }) => ({
      id,
    }));
  }
  
  export default async function module({
    params: { id },
  }: {
    params: { id: string };
  }) {
    const { data: module } = await supabase
      .from("module")
      .select()
      .match({ id })
      .single();
  
    if (!module) {
      notFound();
    }
  
    return (
        <div className={styles.sidebar}>
  <aside className={styles.sidebar__sidebar}>
    
      <ul>
        <li>
          <a href='/modules/toursvirtuales'>Tours Virtuales</a>
        </li>
        <li>
          <a href='/modules/integracion'>Integracion</a>
        </li>
      </ul>
    
  </aside>
  <main className={styles.sidebar__main}>
  <div className={styles.playerWrapper}>
    <Player
      playbackId="oKthiMVIMEKXJZcojBlvzI55002gsIWEwYH00mBCP5Zao"
      placeholder="fO0101O00KgKEVbWLe2tY552HMcQ02XmnuvFvOgAIvCStQI"
      aspectRatio={"16/9"} />
    </div>
  </main>
  </div>
    );
}