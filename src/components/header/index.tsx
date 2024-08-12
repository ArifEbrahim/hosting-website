import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles['main_header']}>
      <div>
        <NavLink to="/" className={styles['main_header__brand']}>
          uHost
        </NavLink>
      </div>
      <nav className={styles['main_nav']}>
        <ul className={styles['main_nav__items']}>
          <li className={styles['main_nav__item']}>
            <NavLink to="/packages">Packages</NavLink>
          </li>
          <li className={styles['main_nav__item']}>
            <NavLink to="/customers">Customers</NavLink>
          </li>
          <li
            className={`${styles['main_nav__item']} ${styles['main_nav__item__cta']}`}
          >
            <NavLink to="/hosting">Start hosting</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
