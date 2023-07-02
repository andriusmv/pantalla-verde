import supabase from "../../../utils/supabase";
import { notFound } from "next/navigation";
import MuxPlayer from '@mux/mux-player-react';
import Link from "next/link";
import Image from "next/image";
import styles from '../../page.module.css'
import '../../globals.css';
import Player from "../../player";
import React from "react";
import Modules from "../../modules_integracion";
import ModulesToursVirtuales from "../../modules_toursvirtuales";
import ReactPlayer from "react-player";
import MyPlyrVideo from "../../player-youtube";
import YoutubeEmbed from "../../player-youtube";

export async function generateStaticParams() {
  const { data: course } = await supabase.from("course").select("id");

  if (!course) {
    return [];
  }

  return course.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));
}

export default async function Course({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: course } = await supabase
    .from("course")
    .select('*')
    .match({ id })
    .single();

  if (!course) {
    notFound();
  }

  return (

    <div key={course.id}>
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.description}>
          {course.subtitle}
        </p>
        <h1 className={styles.title}>
          {course.title}
        </h1>
        <p className={styles.description2}>
          {course.description}
        </p>
        <div className="image-container">
          <Image
            src={course.thumbnail}
            alt={course.title}
            width={500}
            height={281}
            />
        </div>
        <div className={styles.grid}>
          <Link href="/pro" className={styles.card2}>
            <h2>Comenzar &rarr;</h2>
          </Link>
          <p>{course.stripe}</p>
          </div>
          
          <div className={styles.sidebarmini}>
          <aside className={styles.sidebarmini__sidebar}>
          <h2>{course.contenido_titulo}</h2>
          <p>{course.contenido_subtitle}</p>
          </aside>
          <main className={styles.sidebarmini__main}>
            <div className={styles.sidebarmini__grid}>
              <h3>Objeto1</h3>
              <p>Descripción y otras cosas</p>
              
          
              <h3>Objeto1</h3>
              <p>Descripción y otras cosas</p>
              
          
              <h3>Objeto1</h3>
              <p>Descripción y otras cosas</p>
              
          
              <h3>Objeto1</h3>
              <p>Descripción y otras cosas</p>
              </div>
          </main>
          </div>
          
          <div className="container">
          <iframe src={`https://www.youtube.com/embed/${course.embed}`} width="500" height="281,25"/>
          </div>
        <div>
        
        <p>{id}</p>
        <p>{course.embed}</p>
        </div>
      </main>
      </div>
    </div>  
  );
  }
  
  // <MuxPlayer
  //       playbackId="FRxFf8z1FLXwltLVmDdthrgH7vOvo02G6fo00PWixU7fc"
  //       metadata={{
  //         video_id: 'V7k4xQBHTtBLehkJwxQySTBYGJuoXVNeFxFEAsuBMXQ',
  //         video_title: 'Bick Buck Bunny',
  //         viewer_user_id: 'user-id-bc-789',
  //       }}
  //       streamType="on-demand" />
