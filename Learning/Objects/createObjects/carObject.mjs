// import Car from "./CarClass"
import Car from "../Classess/CarClass.mjs";


let obj = new Car("Rabby")

obj.printAllInfo()

console.log(`Hello ${obj.getOwnerName()}`)
console.log(`Max speed ${obj.max_speed}`)

