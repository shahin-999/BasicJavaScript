let arr = [32,3,234,23,11,56]
let sum=0
function arraySum (numb){
    sum+=numb
}
function updateArray(num, indx, array1){
    array1[indx] = num*10
}

arr.forEach(arraySum)
console.log(`Sum of array is: ${sum}`)

arr.forEach(updateArray)
console.log(arr)

// array.forEach(element => {
    
// });

// Reduce method in JS
let arr1 = [1,2,3,4,5,6,7,8,9]

function summation(total, value){
    return total+value
}

function multiplication(total, value){
    return total*value
}

function subtract(total, value){
    return total-value
}

console.log(`Using reducr method for - summation: ${arr1.reduce(summation)}`)
console.log(`Using reducr method for - multiplication: ${arr1.reduce(multiplication)}`)
console.log(`Using reducr method for - subtract: ${arr1.reduce(subtract)}`)