import { NavLink, Outlet } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  const navLinkStyles = ({ isActive }) => {
    return `${styles['main-nav']} + ${isActive ? ':active' : ''}`
  }

  return (
    <>
      <header className={styles['main-header']}>
        <div>
          <NavLink to="/" className={styles['main-header__brand']}>
            uHost
          </NavLink>
        </div>
        <nav className={styles['main-nav']}>
          <ul className={styles['main-nav__items']}>
            <li className={styles['main-nav__item']}>
              <NavLink to="/packages">Packages</NavLink>
            </li>
            <li className={styles['main-nav__item']}>
              <NavLink to="/customers">Customers</NavLink>
            </li>
            <li
              className={`${styles['main-nav__item']} ${styles['main-nav__item--cta']}`}
            >
              <NavLink to="/hosting">Start hosting</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  )
}
