export default async function handler(req, res) {
  //Get data submitted in reqs body

  const stock = req.body.stock

  //Output log
  console.log(stock)

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_Yahoo_ID,
      "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    },
  }

  try {
    const response = await fetch(
      `https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=${stock}&region=US`,
      options
    )
    //Data for autoComplete req
    const data = await response.json()
    console.log(data.quotes[0])
    const quoteName = data.quotes[0].symbol

    //Data for quotes
    const quotesResponse = await fetch(
      `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=${quoteName}`,
      options
    )

    const quotesData = await quotesResponse.json()
    console.log(quotesData)

    res.status(200).json({ data, quotesData })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
