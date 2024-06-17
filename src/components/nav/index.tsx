import { Link, Outlet } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <header>
        <div>
          <a href="index.html">uHost</a>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/packages">Packages</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/hosting">Start hosting</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  )
}
