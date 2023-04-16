export default async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_Yahoo_ID,
      "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    },
  }

  try {
    const response = await fetch(
      "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=aapl&region=US",
      options
    )

    const data = await response.json()

    res.status(200).json({ text: `${data.price.regularMarketPrice.fmt}` })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
