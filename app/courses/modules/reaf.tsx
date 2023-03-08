"use client";

import MuxPlayer from '@mux/mux-player-react';

import styles from '../page.module.css';

export default function Module() {
    return(
        <div className={styles.sidebar}>
            <aside className={styles.sidebar__sidebar}>
            
            </aside>

            <main className={styles.sidebar__main}>
        <MuxPlayer
        playbackId="oKthiMVIMEKXJZcojBlvzI55002gsIWEwYH00mBCP5Zao"
        metadata={{
          video_id: 'fO0101O00KgKEVbWLe2tY552HMcQ02XmnuvFvOgAIvCStQI',
          video_title: 'Bick Buck Bunny',
          viewer_user_id: 'user-id-bc-789',
        }}
        streamType="on-demand" />
            </main>
        </div>
    )
}