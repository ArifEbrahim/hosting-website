import styles from './Customers.module.css'

export default function Customers() {
  return (
    <div className={styles.container}>
      <div className={styles.testimonial} id={styles.customer_1}>
        <div className={styles.testimonial__image_container}>
          <img
            src="../images/customer-1.jpg"
            alt="Mike Statham - Customer"
            className={styles.testimonial__image}
          />
        </div>
        <div className={styles.testimonial__info}>
          <h1 className={styles.testimonial__name}>Mike Statham</h1>
          <h2 className={styles.testimonial__subtitle}>
            Founder of
            <a href="tech-analysis.com">tech-analysis.com</a>
          </h2>
          <p className={styles.testimonial__text}>
            uHost helped me realize my project with a highly constrained budget
            in like no time.
          </p>
        </div>
      </div>
      <div className="testimonial" id={styles.customer_2}>
        <div className={styles.testimonial__info}>
          <h1 className={styles.testimonial__name}>John Mellow</h1>
          <h2 className={styles.testimonial__subtitle}>
            Hosts his private videos on uHost.
          </h2>
          <p className={styles.testimonial__text}>
            I worked as a blogger and always looked for an integrated hosting
            and file storage solution. I found it in uHost!
          </p>
        </div>
        <div className={styles.testimonial__image_container}>
          <img
            src="../images/customer-2.jpg"
            alt="John Mellow - Customer"
            className={styles.testimonial__image}
          />
        </div>
      </div>
    </div>
  )
}
