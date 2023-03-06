import supabase from "../../../utils/supabase";
import { notFound } from "next/navigation";
import MuxPlayer from '@mux/mux-player-react'

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
    
      <p key={course.id}>
        {course.title}<br />{course.description}<br />{course.video_url}</p>
        
    
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
