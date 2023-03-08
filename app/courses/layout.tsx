import '../globals.css';
import styles from './page.module.css';

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
  <div className={styles.sidebar}>
  <aside className={styles.sidebar__sidebar}>
    
      <ul>
        <li>
          <a href='/courses/33f56810-f493-4ece-8be5-e3c0680bb94a'>Tours Virtuales</a>
        </li>
        <li>
          <a href='/courses/630c75fc-95ce-4701-b813-a117d68437b7'>Integracion</a>
        </li>
      </ul>
    
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