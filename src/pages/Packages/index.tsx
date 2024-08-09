import styles from './Packages.module.css'

export default function Packages() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.package}>
          <a href="#">
            <h1 className={styles.package_title}>Our PLUS Plan</h1>
            <h2 className={styles.package_subtitle}>
              The most popular choice of our customers.
            </h2>
            <p className={styles.package_info}>
              Benefit from increased storage and faster support to ensure that
              your mission-critical data and applications are always available!
            </p>
          </a>
        </section>
        <section className={styles.package}>
          <a href="#">
            <h1 className={styles.package_title}>Our FREE Plan</h1>
            <h2 className={styles.package_subtitle}>
              An extremely solid start into our hosting world.
            </h2>
            <p className={styles.package_info}>
              Get started immediately at zero cost!
            </p>
          </a>
        </section>
        <section className={styles.package}>
          <a href="#">
            <h1 className={styles.package_title}>Our PREMIUM Plan</h1>
            <h2 className={styles.package_subtitle}>
              All your enterprise needs. Instant support, guaranteed uptime.
            </h2>
            <p className={styles.package_info}>
              The best solution for small to large enterprises. Because hosting
              shouldn`&apos`t be in the way!
            </p>
          </a>
        </section>
      </div>
    </>
  )
}
