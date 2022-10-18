class Person{
    // properties
    public Name:string;
    public Age:number;
    public Email;string;
    private Secrets:string[];
    protected Income:number;

//operations = functions = methods
public Eat(...food:string[]){
    console.log(this.Name + "likes to eat the following: ");
    for (var i=0; i<food.length; i++){
        console.log(food[i]);
    }
}
public AssignIncome(income:number){
    this.Income = income; //to assign the value to the protected property
}
}

class ITOfficer extends Person{
    public printTotalRefund(){
        console.log(this.Name + "has received a total refund of ");
        if(this.Income > 300000){
            console.log("INR 10000");
        }
        else{
            console.log("INR 3000");
        }
    }
}
// var SE = new Person();
// SE.Name = "Satish Kumar";
// SE.AssignIncome(500000);

var auditor = new ITOfficer();
auditor.Name = "Prakash";
auditor.Eat("Chapati","2 sabjis", "dessert");
auditor.AssignIncome(1000000);
auditor.printTotalRefund();

// construct real persons 
// var Jon = new Person();
// Jon.Name = "Jon";
// Jon.Email = "jon@abc.com";
// Jon.Eat("Junk food"," pastas");

// var Bob = new Person();
// Bob.Name = "Bob";
// Bob.Email = "bob@gmail.com";
// Bob.Eat("Baby food", "fruits");