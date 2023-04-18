import { useState, useEffect } from "react"
import styles from "../styles/home.module.css"

export default function Stock() {
  const [stockPrice, setStockPrice] = useState("")
  const [stockName, setStockName] = useState("")

  const getYahoo = async () => {
    setStockPrice("")
    try {
      const res = await fetch("/api/stocks")
      if (res.ok) {
        const data = await res.json()
        const price = data.price.regularMarketPrice.fmt
        setStockPrice(price)
      } else {
        throw new Error("Error fetching data")
      }
    } catch (err) {
      console.error(err)
      setStockPrice("Error fetching data")
    }
  }

  useEffect(() => {
    //add any other dependencies as necessary
  }, [getYahoo])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.ch1}>
          <h1>Apple Price:</h1>
          <h2>$ {stockPrice}</h2>
          <button onClick={getYahoo}>Get Price</button>
        </div>
      </div>
    </>
  )
}
