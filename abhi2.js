// class student{

//     static count=0;  //static variable to call

    

//    constructor(name,age,ph_no,marks){

//        this.name=name;

//        this.age=age;

//        this.ph_no=ph_no;

//        this.marks=marks;

//        student.countStudent();

//    }

//    static countStudent(){

       

//        return(student.count++);     //this is how u access static variable

//    }

//    eligible(){

//        if(this.marks >=40){

//            console.log(`${this.name} age ${this.age} is eligible`);

//        }

//        else if(this.marks<40){

//            console.log(`${this.name} age ${this.age} is not eligible`);

//        }

//    }







   

// }

// const Riya=new student('Riya',18,1234,34);

// const Hiya=new student('Hiya',15,2345,35);

// const Diya=new student('Diya',16,4567,60);

// const Siya=new student('Siya',17,7891,70);

// const Rooh=new student('Rooh',19,3456,80);

// console.log(student.countStudent());

// Riya.eligible();

// Hiya.eligible();

// Diya.eligible();

// Siya.eligible();

// Rooh.eligible();


// FAT ARROW Function

class student {
    constructor (name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }

    setPlacementAge(minPlacementAge){
        console.log(this);
        
            return (minMarks)=>{
                console.log("inside eligible for the current company ",this);
                
                if(this.marks>minMarks && this.age>minPlacementAge){
                    console.log(this.name+" is ready for placement");
                    
                }else{
                    console.log(this.name+ " is not ready for the placement" );
                    
                }
            }
    }
}
// setPlacementAge(18)
const Abhi=new student('Abhi',22,97);
const Rahul=new student('Rahul',17,86);

Abhi.setPlacementAge(18)(15);
