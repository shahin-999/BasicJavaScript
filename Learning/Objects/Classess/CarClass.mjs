 class Car {

    constructor(name){
        this.setOwnerName(name)
    }

    color= "Red"
    length="6 meter"
    max_speed= "180 km/h"
    horsePower= "120 HP"
    brandName= "BMW"
    ownerName=""

    setOwnerName(name){
        this.ownerName=name
    }

    getOwnerName(){
        return this.ownerName
    }

    printAllInfo(){
        let msg = `This car from  ${this.brandName}. It's a powerful car. It's ${this.horsePower} and it can assive ${this.max_speed} max speed. Today Mr. ${this.getOwnerName()} bought a ${this.color} color car from us.`
        console.log(msg)
    }
}

export default Car;

// let obj = new Car("Rabby")

// obj.printAllInfo()