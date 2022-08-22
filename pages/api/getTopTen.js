export default function handler(req, res){
    const getData = async () => {
      
       const response = await fetch('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest' ,
            {
                method: 'GET',
                headers: {
                    'X-CMC_PRO_API_KEY': '${process.env.CMC_API_KEY}',
                    Accept: '*/*'
                },
            },
        )

        const data = await response.json()
        console.log(data)

        res.status(200).json({data})
    }

    getData()
}