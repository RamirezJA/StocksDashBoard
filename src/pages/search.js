import styles from "../styles/search.module.css"
import { useState } from "react"
import Image from "next/image"

export default function Search() {
  const [stockName, setStockName] = useState("")
  const [stockNews, setStockNews] = useState("")
  const [imageNews, setImageNews] = useState("")
  const [stockSymbol, setSymbol] = useState("")
  const [quotesData, setQuotesData] = useState("")

  //handles the submit event
  const handleSubmit = async (event) => {
    setStockName("")
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    //Get the data from the form
    const data = {
      stock: event.target.stock.value,
    }

    //Send the data to server in JSON
    const JSONdata = JSON.stringify(data)

    //API endpoint where we send form data
    const endpoint = "/api/form"

    //Form the request for sending data to the server
    const options = {
      //The method is POST because we are sending data
      method: "POST",
      //Tell the server we're sending JSON
      headers: {
        "Content-Type": "application/json",
      },
      //Body of the request is the JSON data we created above
      body: JSONdata,
    }

    //Send the form data to our forms API and get a response
    const response = await fetch(endpoint, options)

    //Get the response data from server as JSON
    //if server returns stock submitted, that means the form works
    const result = await response.json()
    const name = result.data.quotes[0].shortname
    const news = result.data.news[0].title
    const pic = result.data.news[0].thumbnail.resolutions[0].url
    const symbol = result.data.quotes[0].symbol
    const price = result.quotesData.quoteResponse.result[0].regularMarketPrice
    //console.log(price)
    setStockName(name)
    setStockNews(news)
    setImageNews(pic)
    setSymbol(symbol)
    setQuotesData(price)
    //console.log(result)
  }

  return (
    <>
      <div className={styles.search}>
        <form onSubmit={handleSubmit} method='post'>
          <label htmlFor='stock'>Stock</label>
          <input type='text' id='stock' name='stock' required />
          <button type='submit'>Submit</button>
        </form>
      </div>

      <div className={styles.container}>
        <div className={styles.ch1}>
          <h1>
            {stockName} Price: {quotesData}
          </h1>
          <h2>{stockNews}</h2>
          <h3>{stockSymbol}</h3>
          <Image src={imageNews} alt='Stock News' width={140} height={140} />
        </div>
      </div>
    </>
  )
}
