import Link from 'next/link';
import { notFound } from 'next/navigation';
import supabase from '../../../utils/supabase';
import '../../globals.css';
import styles from './page.module.css';

async function getData() {
  const { data: module } = await supabase.from("module")
  .select("*")
  .order('course_id', { ascending: false })
  
  if (!module) {
    notFound();
  }

  return (
    <>
      {module.map((module) => (
    <div key={module.id} className={styles.container}>
    <Link href={`/modules/${module.id}`} className={styles.cardmodules}>
      <p>{module.title}</p>
    </Link>
    </div>
    
          ))}
    </>
      );}
  
export default async function ModulesLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const data = await getData();
  return (
    
  <div className={styles.sidebar}>
  <aside className={styles.sidebar__sidebar}>
    
{data}
    
  </aside>
  <main className={styles.sidebar__main}>{children}</main>
  </div>
  );
}

{/* <div className={styles.sidebar}>
      <aside className={styles.sidebar__sidebar}>
    <ul>{module.map((module) => (
      <li key={module.id}>
        <h2>{module.title}</h2>
      
      </li>))}  
      </ul>
      </aside>
      <main className={styles.sidebar__main}>
      <div className={styles.playerWrapper}>
      {module.map((module) => (
      <Player  
          playbackId={module.video_url}
          placeholder="fO0101O00KgKEVbWLe2tY552HMcQ02XmnuvFvOgAIvCStQI"
          aspectRatio={"16/9"}
          />))} 
      </div>
    </main>
      </div> */}