import supabase from "../../utils/supabase";
import Link from "next/link";
import Image from "next/image";
import styles from '../page.module.css';

export default async function Tutoriales() {
  const { data: tutorial } = await supabase.from("tutorial").select("*");

  if (!tutorial) {
    return <p>No posts found.</p>;
  }

  return( 
    <div className={styles.main}>
      <h1>Tutoriales Gratuitos</h1>
      <p>Escoge cualquiera para comenzar</p>
    <div className={styles.grid}>
      {tutorial.map((tutorial) => (
    <Link key={tutorial.id} href={`/tutoriales/${tutorial.id}`} className={styles.card}>
      <h2>{tutorial.title}</h2>
      <p>{tutorial.description}</p>
      <p>{tutorial.duration}</p>
    </Link>))}
    </div>
      <Image src={"/goggles.png"} alt={""} width={200} height={200} />
    </div>
  );
}