import styles from "../styles/home.module.css"
import Stock from "./stock"

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.ch1}>
          <Stock />
        </div>
        <div className={styles.ch2}>chart2 </div>
        <div className={styles.ch3}>chart3</div>
        <div className={styles.ch4}>chart4</div>
        <div className={styles.ch5}>chart5</div>
      </div>
    </>
  )
}
