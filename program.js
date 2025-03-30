class Car{
    constructor(make,model,year,isAvailable = true){
        this.make=make
        this.model=model
        this.year=year
        this.isAvailable=isAvailable
    }
    rentCar = (customer)=>{
        if(this.isAvailable){
            this.isAvailable=false
            customer.rentedCars.push(this)
            console.log(`${this.make} model ${this.model} has been rented to ${customer.name}`)
        }else{
            console.log("The car is already rented")
        }
    }
    returnCar = (customer)=>{
        console.log("Return is under process")
        // setTimeout(()=>{
            this.isAvailable=true;
        let x=customer.rentedCars.findIndex((ele)=>ele.make==this.make && ele.model==this.model)
        customer.rentedCars.splice(x,1)
        console.log(`${customer.name} has successfully return ${this.make} model:${this.model}`)
        // },2000)
        
    }
}

class Customer{
    constructor(name,rentedCars = []){
        this.name=name
        this.rentedCars=rentedCars
    }

    
}

class PremiumCustomer extends Customer{
    constructor(name,rentedCars,discountRate){
        super(name,rentedCars);
        this.discountRate=discountRate
    }
}

function calculateRentalPrices(car,customer,days){
    let basePrice=50;
    let totalPrice=0;
    let multiplyingFactor=0
    if(car.model=="Sedan"){
        multiplyingFactor=1.5;
    }else if(car.model=="SUV"){
        multiplyingFactor=2
    }else{
        multiplyingFactor=2.5
    }
    totalPrice=basePrice*multiplyingFactor*days   
    if(customer instanceof PremiumCustomer){
        totalPrice*=(100-customer.discountRate)
    } 
    console.log(`Car ${car.make} model ${car.model} will cost ${totalPrice} for ${days} days`)
}

let car1=new Car("Tata","Sedan", 2024,true);
let car2=new Car("Mahindra","SUV", 2023);
let car3=new Car("Mahindra","EV",2024);

let customer1= new Customer("Amit");
let premiumCustomer1= new PremiumCustomer("Santosh",[],10)
console.log({...premiumCustomer1})
car1.rentCar(premiumCustomer1)
car1.rentCar(customer1)