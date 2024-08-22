import styles from './Packages.module.css'

export default function Packages() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.package} id={styles.plus}>
          <a href="#">
            <h1 className={styles.package__title}>Our PLUS Plan</h1>
            <h2 className={styles.package__badge}>RECOMMENDED</h2>
            <h2 className={styles.package__subtitle}>
              The most popular choice of our customers.
            </h2>
            <p className={styles.package__info}>
              Benefit from increased storage and faster support to ensure that
              your mission-critical data and applications are always available!
            </p>
          </a>
        </section>
        <section className={styles.package} id={styles.free}>
          <a href="#">
            <h1 className={styles.package__title}>Our FREE Plan</h1>
            <h2 className={styles.package__subtitle}>
              An extremely solid start into our hosting world.
            </h2>
            <p className={styles.package__info}>
              Get started immediately at zero cost!
            </p>
          </a>
        </section>
        <div className={styles.clearfix}></div>
        <section className={styles.package} id={styles.premium}>
          <a href="#">
            <h1 className={styles.package__title}>Our PREMIUM Plan</h1>
            <h2 className={styles.package__subtitle}>
              All your enterprise needs. Instant support, guaranteed uptime.
            </h2>
            <p className={styles.package__info}>
              The best solution for small to large enterprises. Because hosting
              shouldn&apos;t be in the way!
            </p>
          </a>
        </section>
      </div>
    </>
  )
}
