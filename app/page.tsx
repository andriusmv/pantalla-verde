import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const intro = "Estás a punto de entrar en un pasadizo secreto donde vuelan drones y se crean gemelos digitales."

export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.gridy}>
        <div className={styles.titleimg}>
        <p className={styles.description}>
          Tutoriales cortos en video
        </p>
        <h1 className={styles.title}>
          Técnicas Nuevas,
        </h1>
        <h1 className={styles.acento}>
          Un video a la vez.
        </h1>
        <p className={styles.description2}>
        Inyecciones de tecnología para vender tus proyectos inmobiliarios
        </p>
        <div className={styles.gridy2}>
          <Link href="/pro">
              <span className='button-accent-normal'>Comenzar</span></Link>
              <Link href="/pro">
              <span className='button-accent-pro'>Hacerse Pro</span></Link>
          </div>
        </div>
        <div className="image-container">
          <Image
            src="/card.svg"
            alt="3D city"
            width={450}
            height={281}
            />
        </div>
        </div>
        <div>
          <p className={styles.intro}>
          <i>{intro}</i>
          </p>
          </div>
        
      </main>

      <footer className={styles.footer}>
        <Link
          href="https://andresmoreno.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Escrito por {' '}
          <span className={styles.logo}>
            AndrésMorenoVásquez
          </span>
          <div className="avatar"><Image src="/amv-memoji.jpg" alt={'amv'} width="35" height="35"/></div>
          </Link>
      </footer>
    </div>
  )
}
