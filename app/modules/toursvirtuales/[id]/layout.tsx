import Link from 'next/link';
import { notFound } from 'next/navigation';
import supabase from '../../../../utils/supabase';
import '../../../globals.css';
import styles from '../../page.module.css';
import List from './list';
  
export default async function ModulesLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    
  <div className={styles.sidebar}>
  <aside className={styles.sidebar__sidebar}>
  <List />
    
  </aside>
  <main className={styles.sidebar__main}>{children}</main>
  </div>
  );
}