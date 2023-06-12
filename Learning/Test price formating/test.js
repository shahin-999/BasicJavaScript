import PriceFormat from "./Common method/PriceFormat.mjs"

let x = 12344.223

let y = "@"+x.toLocaleString(undefined,{
    maximumFractionDigits:2,
    minimumFractionDigits: 2
})

let op = new PriceFormat()

let retrn = op.priceFormat(234.34)



console.log(retrn)