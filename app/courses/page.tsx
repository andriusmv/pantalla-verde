import Link from "next/link";
import supabase from "../../utils/supabase";
import styles from './page.module.css'

export default async function Courses() {
  const { data: course } = await supabase.from("course").select("id, title, description");

  if (!course) {
    return <p>No posts found.</p>;
  }

  return course.map((course) => (
    <div key={course.id} className={styles.grid}>
    <Link href={`/courses/${course.id}`} className={styles.card}>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    </Link>
    </div>
  ));
}
