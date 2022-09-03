class movie{
    constructor(movie,studio,pg){
        this.movie=movie;
        this.studio=studio;
        this.rating=pg;
    }
     
     getPg(inputArray){  
      inputArray.forEach(ele => {
       
       {console.log(ele)}
      });  
      console.log(this.rating)
    }    
}

let movieobj1=new movie("Avengers Civil War","Warn Productions","pg13");
let movieobj2=new movie("Avengers End Game","Warn1 Productions","pg14");
let movieobj3=new movie("Jhon Wick-2","Disney Productions","pg15");

movieobj1.getPg([movieobj1,movieobj2,movieobj3]);

 