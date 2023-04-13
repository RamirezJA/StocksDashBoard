import Nav from "./Nav"
import Footer from "./Footer"
import style from "../styles/site.module.css"

export default function Layout({ children }) {
  return (
    <>
      <div className={style.site}>
        <Nav />
        <main className={style.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}
