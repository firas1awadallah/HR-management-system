"use strict";
window.location.href = "app.js";
let table = document.getElementById("table");

 Employee.prototype.renderTable= function(){

            let tr = document.createElement('tr');
             table.appendChild(tr);
          
             let td1 = document.createElement('td');
             td1.textContent="Administration";
             tr.appendChild(td1);
          
             let td2 = document.createElement('td');
             td2.textContent= a;
             tr.appendChild(td2);

               let td3 = document.createElement('td');
               td3.textContent= slry;
               tr.appendChild(td3);
               let td4 = document.createElement('td');
               td4.textContent=avgSalary;
               tr.appendChild(td4);
               let tr1 = document.createElement('tr');
             table.appendChild(tr1);
          
             let td11 = document.createElement('td');
             td11.textContent="Marketing";
             tr1.appendChild(td11);
          
             let td22 = document.createElement('td');
             td22.textContent= a;
             tr1.appendChild(td22);

               let td33 = document.createElement('td');
               td33.textContent= slry;
               tr1.appendChild(td33);
               let td44 = document.createElement('td');
               td44.textContent=avgSalary;
               tr1.appendChild(td44);
               let tr2 = document.createElement('tr');
             table.appendChild(tr);
          
             let td111 = document.createElement('td');
             td111.textContent="Development";
             tr2.appendChild(td111);
          
             let td222 = document.createElement('td');
             td222.textContent= a;
             tr2.appendChild(td222);

               let td333 = document.createElement('td');
               td333.textContent= slry;
               tr2.appendChild(td333);
               let td444 = document.createElement('td');
               td444.textContent=avgSalary;
               tr2.appendChild(td444);
               let tr3 = document.createElement('tr');
             table.appendChild(tr);
          
             let td1111 = document.createElement('td');
             td1111.textContent="Finance";
             tr3.appendChild(td1111);
          
             let td2222 = document.createElement('td');
             td2222.textContent= a;
             tr3.appendChild(td2222);

               let td3333 = document.createElement('td');
               td3333.textContent= slry;
               tr3.appendChild(td3333);
               let td4444 = document.createElement('td');
               td4444.textContent=avgSalary;
               tr3.appendChild(td4444);
            
               let foottr = document.createElement('tr');
             table.appendChild(tr);
          
             let td5 = document.createElement('td');
             td5.textContent="Administration";
             foottr.appendChild(td5);
          
             let td55 = document.createElement('td');
             td55.textContent= a;
             foottr.appendChild(td55);

               let td555 = document.createElement('td');
               td555.textContent= slry;
               foottr.appendChild(td555);
               let td5555 = document.createElement('td');
               td5555.textContent=avgSalary;
               foottr.appendChild(td5555);
          }
          function administrationEmployee(){
          let a=0;
          let totalSalary=0;
          let avgSalary=o
          for(i=0;i<allEmployee.length;i++){
            
            if(Employee.department=="Administration"){
            a=a+1;
            totalSalary=totalSalary+Employee.netSalary;
            avgSalary=totalSalary/a;
            }
            else if(Employee.department=="Marketing"){
                a=a+1;
                totalSalary=totalSalary+Employee.netSalary;
                avgSalary=totalSalary/a;
              }
              else if(Employee.department=="Development"){
                a=a+1;
                totalSalary=totalSalary+Employee.netSalary;
                avgSalary=totalSalary/a;
              }
              else if(Employee.department=="Finance"){
                a=a+1;
                totalSalary=totalSalary+Employee.netSalary;
                avgSalary=totalSalary/a;
              }
              a=a+1;
              totalSalary=totalSalary+Employee.netSalary;
              avgSalary=totalSalary/a;
          }
        } 
        return a,totalSalary,avgSalary;
        
        
        
        