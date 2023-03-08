
import supabase from "../../../utils/supabase";
import { notFound } from "next/navigation";
import MuxPlayer from '@mux/mux-player-react'
import Link from "next/link";
import styles from './page.module.css'
import Player from "../../player";



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

    <><div className="playerWrapper">
      <Player
        playbackId={course.video_ad}
        placeholder="fO0101O00KgKEVbWLe2tY552HMcQ02XmnuvFvOgAIvCStQI"
        aspectRatio={"16/9"} />
    </div><div>
        <Link href={course.video_ad}>Video Ad</Link>
      </div></>
    
      // <div key={course.id} className={styles.grid}>
      // <div className={styles.card}>
      //   <h2>{course.title}</h2>
      //   <p>{course.description}</p>
      // </div>
      
      // </div>  
    
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
