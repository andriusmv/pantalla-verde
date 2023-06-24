
import supabase from "../../../utils/supabase";
import { notFound } from "next/navigation";
import MuxPlayer from '@mux/mux-player-react'
import Link from "next/link";
import styles from '../../page.module.css';


export default async function Integracion() {
  const { data: module } = await supabase.from("module").select().in('course_id', ['blender']);

  if (!module) {
    return <p>No posts found.</p>;
  }

  return (
    <>
    <div className={styles.grid}>
      {module.map((module) => (
        <Link key={module.id} href={`/modules/blender/${module.id}`} className={styles.card}>
          <i>{module.course_id}</i>
          <h2>{module.title}</h2>
          <p>{module.subtitle}</p>
        </Link>))}
      </div>
      </>
    )}