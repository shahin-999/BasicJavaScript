let max = 99999999, min = 00000000
let codeMax = 19, codeMin = 13


for(i=1; i<=500;i++){
    let firstDigit = parseInt(Math.random()*(codeMax-codeMin)+codeMin)
    let lastDigit = parseInt(Math.random()*(max-min)+min)

    if (firstDigit==11 || firstDigit==12){
        continue
        i--
    }

    // console.log(x)
    console.log("0"+firstDigit+""+lastDigit)

}