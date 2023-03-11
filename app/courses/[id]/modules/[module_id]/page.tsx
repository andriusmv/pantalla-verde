import supabase from "../../../../../utils/supabase";
import { notFound } from "next/navigation";
import styles from './page.module.css'
import React from "react";

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
    .single();

  if (!module) {
    notFound();
  }

  return (
    <div key={module.id} className={styles.grid}>
    <h2>{module.video_url}</h2>
    </div>
  );
  }