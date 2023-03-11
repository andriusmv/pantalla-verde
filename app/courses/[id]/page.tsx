import supabase from "../../../utils/supabase";
import { notFound } from "next/navigation";
import MuxPlayer from '@mux/mux-player-react';
import Link from "next/link";
import Image from "next/image";
import styles from './page.module.css'
import Player from "../../player";
import React from "react";
import ReactPlayer from 'react-player/lazy';
import Modules from "../../modules_integracion";
import ModulesToursVirtuales from "../../modules_toursvirtuales";



export async function generateStaticParams() {
  const { data: course } = await supabase.from("course").select("id");

  return course?.map(({ id }) => ({
    id,
  }));
}

export default async function Course({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: course } = await supabase
    .from("course")
    .select()
    .match({ id })
    .single();

  if (!course) {
    notFound();
  }

  return (

    <div key={course.id} className={styles.grid}>
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
          <Link href={`/courses/${course.id}/modules`} className={styles.card2}>
            <h2>Comenzar &rarr;</h2>
          </Link>
          </div>
          <div className="image-container">
          <Image
            src={course.thumbnail}
            alt={course.title}
            width={500}
            height={281}
            />
        </div>
        <div>
          {/* @ts-expect-error Async Server Component */}
        <ModulesToursVirtuales />
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
