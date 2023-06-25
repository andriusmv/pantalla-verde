import supabase from "../../utils/supabase";
import Link from "next/link";
import styles from '../page.module.css'

export default async function Tutoriales() {
  const { data: tutorial } = await supabase.from("tutorial").select("*");

  if (!tutorial) {
    return <p>No posts found.</p>;
  }

  return( 
    <div className={styles.main}>
    <div className={styles.grid}>
      {tutorial.map((tutorial) => (
    <Link key={tutorial.id} href={`/tutoriales/${tutorial.id}`} className={styles.card}>
      <h2>{tutorial.title}</h2>
      <p>{tutorial.description}</p>
      <p>{tutorial.duration}</p>
    </Link>))}
    </div>
    </div>
  );
}