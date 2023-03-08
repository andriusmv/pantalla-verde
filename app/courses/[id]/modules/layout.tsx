import '../globals.css';
import styles from './page.module.css';

export default function ModulesLayout({
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