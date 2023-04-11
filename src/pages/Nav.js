import styles from "../styles/Nav.module.css"
import Link from "next/link"

export default function Nav() {
  return (
    <>
      <div className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.home}>
            <Link href='/' className={styles.link}>
              Stock DashBoard
            </Link>
          </li>
          <li className={styles.icon}>
            <Link href='/about' className={styles.link}>
              Image
            </Link>
          </li>
          <li>
            <Link href='/about' className={styles.link}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
