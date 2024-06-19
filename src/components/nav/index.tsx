import { Link, Outlet } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <>
      <header className={styles['main-header']}>
        <div>
          <Link to="/" className={styles['main-header__brand']}>uHost</Link>
        </div>
        <nav className={styles['main-nav']}>
          <ul className={styles['main-nav__items']}>
            <li className={styles['main-nav__item']}>
              <Link to="/packages">Packages</Link>
            </li>
            <li className={styles['main-nav__item']}>
              <Link to="/customers">Customers</Link>
            </li>
            <li className={styles['main-nav__item']}>
              <Link to="/hosting">Start hosting</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  )
}
