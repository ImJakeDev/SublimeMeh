import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/sublimemeh-logo.svg"
          alt="SublimeMeh Logo"
          width={393.79}
          height={57.68}
          priority
        />
      </div>
    </main>
  );
}
