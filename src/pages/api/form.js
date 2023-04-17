export default function handler(req,res){
    //Get data submitted in reqs body
    const body = req.body

    //Output log
    console.log('body: ', body)

    if(!body.stock){
        return res.status(400).json({data:'Stock not found'})
    }

    //Found the Stock
    //Sends an HTTP success code

    res.status(200).json({data: `${body.stock}`})
}