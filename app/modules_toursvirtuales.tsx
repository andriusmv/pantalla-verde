import supabase from "../utils/supabase";
import styles from './page.module.css';


export default async function ModulesToursVirtuales() {
  const { data: module } = await supabase.from("module").select().in('course_id', ['integracion']);

  if (!module) {
    return <p>No posts found.</p>;
  }

  return (
    <div className={styles.content}>
    <ul>{module.map((module) => (
      <li key={module.id}>
        <h2>{module.title}</h2>
      </li>))}  
      </ul>
      </div>
    )}