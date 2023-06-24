"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../page.module.css';
import supabase from '../../../../utils/supabase';

interface Module {
  id: string;
  title: string;
  description: string;
}

export default function Lista() {
  const [modules, setModules] = useState<Module[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: modulesData } = await supabase
        .from('module')
        .select('id, title, description')
        .in('course_id', ['toursvirtuales'])
        .order('order', { ascending: true });

      if (!modulesData) {
        // Handle the case when no courses are found
        return;
      }

      setModules(modulesData);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.grid}>
      {modules.map((module) => (
        <Link key={module.id} href={`/modules/toursvirtuales/${module.id}`} className={styles.card}>
          <h2>{module.title}</h2>
          <p>{module.description}</p>
        </Link>
      ))}
    </div>
  );
}
