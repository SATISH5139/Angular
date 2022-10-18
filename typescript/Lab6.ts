class Employee{
    // properties
    public EmpId:number;
    public Name:string;
    public Email;string;
    public Designation:string;
    protected Salary:number;

    //operations = functions = methods



    public works(...tasks:string[]){
        console.log(this.Name + "Details are following: ");
        for (var i=0; i<tasks.length; i++){
            console.log(tasks[i]);
        }
    }
    public AssignIncome(salary:number){
        this.Salary = salary; //to assign the value to the protected property
    }
    }

    class Admin extends Employee{
        public printTotalRefund(){
            console.log(this.Name + "has received a total refund of ");
            if(this.Salary > 300000){
                console.log("INR 10000");
            }
            else{
                console.log("INR 3000");
            }
        }
    }

    var auditor = new Admin();
    auditor.Name = "Prakash";
    auditor.Empid(12345);
    auditor.Designation("Analyst");
    auditor.Emailid("satishkumar@gmail.com");
    auditor.Salary(500000);