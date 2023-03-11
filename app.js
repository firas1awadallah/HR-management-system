"use strict";
 function Employee (Full_Name , Department ,Level ,Image_URL){
    this.employeeID = 0;
    this.fullName = Full_Name;
    this.department = Department;
    this.level = Level;
    this.imageUrl = Image_URL;
    this.salary = 0;
 }

      Employee.prototype.creatId = function  () {
        this.employeeID =  Math.floor(1000 + Math.random() * 9000);
      
} 

      Employee.prototype.netSalary = function  () {
    
        if(this.level =="Junior"){
            this.salary = Math.floor(((Math.random() * (1000 - 500) ) + 500)* 0.925) ;
            
        } 
        else if(this.level =="Mid-Senior"){
            this.salary = Math.floor(((Math.random() * (1500 - 1000) ) + 1000)* 0.925) ;
        }
       else if(this.level =="Senior"){
        this.salary = Math.floor(((Math.random() * (2000 - 1500) ) + 1500)* 0.925) ;
       }
     }
     
      Employee.prototype.render  = function  () {
          document.write(`<div style="color:white ;text-align: center;background-color:#3CB371;width:25%"> <img style="margin:20px"src="${this.imageUrl}" <br><h4>  Name: ${this.fullName} -ID: ${this.employeeID}<br> Department: ${this.department} -Level: ${this.level}<br> Salary: ${this.salary}</h4><br></div>`);
          }
    
     let form = document.getElementById("form");
     form.addEventListener("submit",gitSubmit);
     
      function gitSubmit (event) {
        event.preventDefault();
       
       
        let Full_Name = event.target.Fullname.value;
        let Department = event.target.Department.value;
        let Level = event.target.Level.value;
        let Image_URL = event.target.Image.value;
        
        let newEmployee = new Employee (Full_Name, Department, Level, Image_URL);
         newEmployee.creatId();
         newEmployee.netSalary();
         newEmployee.render();
     }

     
    
    
    


   // let employee1 = new Employee(1000,"Ghazi Samer","Administration","Senior");
   // let employee2 = new Employee(1001,"Lana Ali","Finance","Senior");
   // let employee3 = new Employee(1002,"Tamara Ayoub","Marketing","Senior");
   // let employee4 = new Employee(1003,"Safi Walid","Administration","Mid-Senior");
   // let employee5 = new Employee(1004,"Omar Zaid","Development","Senior");
   // let employee6 = new Employee(1005,"Rana Saleh","Development","Junior");
   // let employee7 = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");


    // employee1.creatId();
    
    // employee1.netSalary();
    // employee2.netSalary();
    // employee3.netSalary();
    // employee4.netSalary();
    // employee5.netSalary();
    // employee6.netSalary();
    // employee7.netSalary();
    
    // employee1.render();
    // employee2.render();
    // employee3.render();
    // employee4.render();
    // employee5.render();
    // employee6.render();
    // employee7.render();

    