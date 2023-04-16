import { useState } from "react"

export default function Stock() {
  const [response, setResponse] = useState("")

  const getYahoo = async () => {
    setResponse("")
    try {
      const res = await fetch("/api/stocks")
      const data = await res.json()
      const stockPrice = data.text
      setResponse(stockPrice)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <div>
        <h1>Apple Price:</h1>
        <h2>$ {response}</h2>
        <button onClick={getYahoo}>Get Price</button>
      </div>
    </>
  )
}
