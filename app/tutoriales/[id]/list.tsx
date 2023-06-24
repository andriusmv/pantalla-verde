"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../page.module.css';
import supabase from '../../../utils/supabase';

interface Tutorial {
  id: string;
  title: string;
  description: string;
}

export default function Lista() {
  const [tutoriales, setTutoriales] = useState<Tutorial[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: tutorialesData } = await supabase
        .from('tutorial')
        .select('*');

      if (!tutorialesData) {
        // Handle the case when no courses are found
        return;
      }

      setTutoriales(tutorialesData);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.grid}>
      {tutoriales.map((tutorial) => (
        <Link key={tutorial.id} href={`/tutoriales/${tutorial.id}`} className={styles.card}>
          <h2>{tutorial.title}</h2>
          <p>{tutorial.description}</p>
        </Link>
      ))}
    </div>
  );
}
