
class personDetail{
    constructor(name,age,dob,gender,ph)
    {
        this.name=name
        this.age=age;
        this.dob=dob;
        this.gender=gender;
        this.ph=ph;
        
    }}

    class person1Detail extends personDetail{
constructor(name,age,dob,gender,ph){
    super(name,age,dob,gender,ph)
}
    person1(){
        console.log("person1");
        console.log(this.name);
        console.log(this.age);
        console.log(this.dob);
        console.log(this.gender);
        console.log(this.ph);
    }}
class person2Detail extends personDetail{
    constructor(name,age,dob,gender,ph){
        super(name,age,dob,gender,ph)
    }
person2(){
    console.log(" ")
        console.log("person2");
        console.log(this.name);
        console.log(this.age);
        console.log(this.dob);
        console.log(this.gender);
        console.log(this.ph);
}
}
const p1 = new person1Detail("ABC","10","01-02-1999","male","123456789");
const p2 = new person2Detail("XYZ","13","02-03-1998","female","9876543321");
p1.person1();
p2.person2();