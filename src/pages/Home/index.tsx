import styles from './Home.module.css'

export default function Home() {
  return (
    <main>
      <section className={styles['product-overview']}>
        <h1>Get the freedom you deserve.</h1>
      </section>
      <section>
        <h1 className={styles['section-title']}>Choose Your Plan</h1>
        <p>Make sure you get the most for your money!</p>
      </section>
    </main>
  )
}
