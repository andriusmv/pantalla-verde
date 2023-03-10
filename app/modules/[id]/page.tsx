import { notFound } from 'next/navigation';
import supabase from '../../../utils/supabase';
import Player from '../../player';
import styles from './/page.module.css';
import React from "react";
import Link from "next/link";

export async function generateStaticParams() {
    const { data: module } = await supabase.from("module").select("id");

    return module?.map(({ id }) => ({
      id,
    }));
  }
  
  export default async function Module({
    params: { id },
  }: {
    params: { id: string };
  }) {
    const { data: module } = await supabase
      .from("module")
      .select()
      .match({ id })
      .select();
  
    if (!module) {
      notFound();
    }
  
    return (
  <>
  {module.map((module) => (
  <div key={module.id} className={styles.playerWrapper}>
    <Player
      playbackId={module.video_url}
      placeholder="fO0101O00KgKEVbWLe2tY552HMcQ02XmnuvFvOgAIvCStQI"
      aspectRatio={"16/9"} />
    </div>
        ))}
  </>
    );
}