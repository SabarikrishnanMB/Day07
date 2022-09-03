class uber{
    constructor(km,vehicleModel)
    {
    this.km=km;
    this.vehicleModel=vehicleModel
    }
}
 class uberprice extends uber
 {
    constructor(km,vehicleModel){
        super(km,vehicleModel)
  }
  pricedetail(){
    if (this.vehicleModel=="Suv") 
    {
        if (this.km>=50){
        console.log(`VehicleModel Is ${this.vehicleModel}`)
        console.log(`Kilometer yor Traveled ${this.km}km`)
        console.log(`Price $ ${(this.km*10)}`)     
        } 
        else 
        {
            console.log(`VehicleModel Is ${this.vehicleModel}`)
            console.log(`Kilometer You Travelled ${this.km}km`)
            console.log(`Price $ ${(this.km*13)}`)
        }
    } 
    
    else if (this.vehiclemodel=="Hatchbag") { 
             
        if (this.km>=50)
        {
        console.log(`VehicleModel Is ${this.vehicleModel}`)
        console.log(`Kilometer You Travelled ${this.km}km`)
        console.log(`Price $ ${(this.km*7)}`)   
      } 
      else 
      {
        console.log(`VehicleModel Is ${this.vehicleModel}`)
       console.log(`Kilometer You Travelled ${this.km}km`)
       console.log(`Price $ ${(this.km*8)}`)
      }
    
}
     else 
     {
        if (this.vehicleModel=="Sedan")
        {
        if (this.km>=50)
        {
        console.log(`VehicleModel Is ${this.vehicleModel}`)
        console.log(`Kilometer You Travelled ${this.km}km`)
        console.log(`Price $ ${(this.km*9)}`)
            
        } 
        else 
        {
        console.log(`VehicleModel Is ${this.vehicleModel}`)
        console.log(`Kilometer You Travelled ${this.km}km`);
        console.log(`Price $ ${(this.km*10)}`);
        } 

        }
        
    }
  
  }
}
const total=new uberprice(40,"Suv")
total.pricedetail();