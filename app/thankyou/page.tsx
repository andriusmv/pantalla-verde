import supabase from "../../utils/supabase";
import { notFound } from "next/navigation";
import MuxPlayer from '@mux/mux-player-react'
import Link from "next/link";
import Player from "../player";
import styles from '../page.module.css';


export default async function Thankyou() {
  const { data: course } = await supabase.from("course").select("id, title, description");

  if (!course) {
    return <p>No posts found.</p>;
  }

  return (
    <>
    <div className={styles.container}>
    <h1>Gracias por confiar en Pantalla Verde</h1>
    <p>Recibirás una confirmación del pago en tu correo electrónico</p>
    <h3>Aquí está el link para comenzar el curso ahora:</h3>
    </div>
    <div className={styles.grid}>
      {course.map((course) => (
        <Link key={course.id} href={`/modules/${course.id}`} className={styles.card}>
          <h2>{course.title}</h2>
        </Link>))}
      </div>
      </>
    )}


    // <div className={styles.playerWrapper}>
    // <Player
    //   playbackId="oKthiMVIMEKXJZcojBlvzI55002gsIWEwYH00mBCP5Zao"
    //   placeholder="fO0101O00KgKEVbWLe2tY552HMcQ02XmnuvFvOgAIvCStQI"
    //   aspectRatio={"16/9"} />
    // </div>