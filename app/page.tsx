import Image from 'next/image'
import Link from 'next/link'
import MatrixRainV12 from './matrix/page'
import styles from './page.module.css'

const intro = "Estás ahí en la oficina, entregando como puedes el último diseño, el último plano, rezando un Padre Nuestro para que el render salga más rápido. Los clientes están esperando tu presentación y el estrés comienza a subir. No sabes cómo pero entregas. Tu jefe está feliz y el proyecto logró fondos para comenzar obra lo antes posible. Pero adivina qué? Ya tienes que seguir con el siguiente proyecto, y con el siguiente y el siguiente del siguiente... y así infinitamente. Y es que por más que lo intentes, siempre va a surgir algo más. Sabes que no se trata de velocidad, se trata de estrategia. Esas noticias que ves por ahí sobre inteligencia artificial, robots y cosas nuevas, te llaman la atención pero sabes que no tienes tiempo para aprender una cosa más. Si pudieras inyectártelas de una sola vez como en la Matrix lo harías, pero no sabes cómo... hasta hoy. Eso es lo que hago aquí. Te enseño en tiempo récord herramientas nuevas para que las lleves a tu oficina y te vuelvas el mago de nuevas tecnologías inmobiliarias. Location intelligence, mapas GIS, visores 3D, realidad virtual, drones y muchas cosas más."

export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
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
        <div className="image-container">
          <Image
            src="/city.png"
            alt="3D city"
            width={500}
            height={281}
            />
        </div>
        <div className={styles.grid}>
          <Link href="/signup" className={styles.card2}>
            <h2>Comenzar &rarr;</h2>
          </Link>
          <Link href="/pro" className={styles.card2}>
            <h2>Hacerse Pro &rarr;</h2>
          </Link>
          </div>
          <p className={styles.intro}>
          {intro}
          </p>

        <div className={styles.grid}>
          <Link href="/toursvirtuales" className={styles.card}>
            <h2>Curso Tours Virtuales & VR &rarr;</h2>
            <p>Find in-depth information about Next.js 13</p>
          </Link>

          <Link
            href="/integracion"
            className={styles.card}
          >
            <h2>Curso Integración Drones con 3D &rarr;</h2>
            <p>Explore the Next.js 13 playground.</p>
          </Link>

          <Link
            href="/gis"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Curso GIS de Código Abierto &rarr;</h2>
            <p>Deploy your Next.js site to a public URL with Vercel.</p>
          </Link>
          
          <Link
            href="/blender"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Curso Blender de Cero a Web &rarr;</h2>
            <p>Deploy your Next.js site to a public URL with Vercel.</p>
          </Link>
          
        </div>
        {/* <div className="image-container">
          <MatrixRainV12 />
        </div> */}
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
