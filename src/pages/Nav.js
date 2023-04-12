import styles from "../styles/Nav.module.css"
import Link from "next/link"
import Image from "next/image"
import icon from "../../public/coin.svg"

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
            <Link href='/about'>
              <Image src={icon} alt='icon' />
            </Link>
          </li>
          <li className={styles.about}>
            <Link href='/about' className={styles.link}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
