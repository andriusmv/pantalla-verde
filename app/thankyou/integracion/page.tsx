import supabase from "../../../utils/supabase";
import Link from "next/link";
import styles from '../../page.module.css';

export default async function Integracion() {
  const { data: module } = await supabase.from("module").select().in('course_id', ['integracion']);

  if (!module) {
    return <p>No posts found.</p>;
  }

  return (
    <>
    <div className={styles.grid}>
      {module.map((module) => (
        <Link key={module.id} href={`/modules/integracion/${module.id}`} className={styles.card}>
          <i>{module.course_id}</i>
          <h2>{module.title}</h2>
          <p>{module.subtitle}</p>
        </Link>))}
      </div>
      </>
    )}