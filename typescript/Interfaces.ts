interface IEmpContract{
    WorkHoursClaue();
    CheckInTimeClause();
}
class KpmgEmp implements IEmpContract{
    public EmpId:number;
    public EmpName:string;
    public Designation:string;
    public ShiftStartTime:string;


    WorkHoursClaue() {
        console.log(`${this.EmpName}  should work for 8hrs a day for 5 days a week`);
    }
    CheckInTimeClause() {
        console.log(`${this.EmpName} should check-in to the ffice by ${this.ShiftStartTime}`);
    }

}
var Satish = new KpmgEmp();
Satish.EmpId =1001;
Satish.EmpName = "Satish";
Satish.Designation = "Analyst";
Satish.ShiftStartTime = "9am";

Satish.WorkHoursClaue();
Satish.CheckInTimeClause();