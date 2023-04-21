import styles from "../styles/search.module.css"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Search() {
  const [stockName, setStockName] = useState("")
  const [stockNews, setStockNews] = useState("")
  const [imageNews, setImageNews] = useState("")
  const [stockSymbol, setSymbol] = useState("")
  const [quotesData, setQuotesData] = useState("")
  const [resData, setResData] = useState("")

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
    const resy = result.data.news
    console.log(resy)
    setStockName(name)
    setStockNews(news)
    setImageNews(pic)
    setSymbol(symbol)
    setQuotesData(price)
    setResData(resy)
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
      <div className={styles.symbol}>
        <div className={styles.content}>
          <div>
            <h3>{stockSymbol}</h3>
          </div>
          <div>
            <h1>{stockName}</h1>
          </div>
          <div>
            <h2>{quotesData}</h2>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {Array.isArray(resData) &&
          resData.map((story) => (
            <div key={story.uuid} className={styles.ch1}>
              <div className={styles.pic}>
                {story.thumbnail && story.thumbnail.resolutions ? (
                  <Image
                    src={story.thumbnail.resolutions[1].url}
                    alt='Stock News'
                    className={styles.image}
                    width={140}
                    height={140}
                  />
                ) : (
                  <Image
                    src='https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'
                    alt='Stock News Placeholder'
                    className={styles.image}
                    width={200}
                    height={140}
                  />
                )}
              </div>

              <div className={styles.title}>
                <Link href={story.link}>
                  <h1>{story.title}</h1> <h2> by {story.publisher}</h2>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
