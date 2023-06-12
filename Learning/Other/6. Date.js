const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const date = new Date()
console.log(`Full date: ${date}`)
console.log(`Only date: ${date.getDate()}`)  
console.log(`Month in number: ${date.getMonth()}`)// return the index number
console.log(`Month in word: ${months[date.getMonth()]}`)
console.log(`Only year: ${date.getFullYear()}`)
