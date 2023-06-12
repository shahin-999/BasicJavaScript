 class PriceFormat{
    priceFormat(_x) {
        return "$" + _x.toLocaleString(undefined,{
            maximumFractionDigits:2,
            minimumFractionDigits: 2
        })
    }
}

// let format = new PriceFormat();

// console.log(format.priceFormat(23432.236));


export default PriceFormat;