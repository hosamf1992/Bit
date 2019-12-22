import axios from "axios";




export async function getRate() {
    try {
        const rate = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
        return rate.data
    } catch (e) {
        console.error(e)
    }
}

// 20191221171627
// https://api.blockchain.info/charts/market-price?format=json

export const data = 
    [
   
        {
            name:'September',
            "x": 1545350400,
            "USD": 4015.6091666666666
        },
        {
            name:'October',
            "x": 1545436800,
            "USD": 3910.973333333333
        },
        {
            name:'November',
            "x": 1545523200,
            "USD": 4027.478333333334
        },
        {
            name:'December',
            "x": 1545609600,
            "USD": 4178.590833333333
        },
       
]