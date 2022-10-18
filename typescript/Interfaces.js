var KpmgEmp = /** @class */ (function () {
    function KpmgEmp() {
    }
    KpmgEmp.prototype.WorkHoursClaue = function () {
        console.log("".concat(this.EmpName, "  should work for 8hrs a day for 5 days a week"));
    };
    KpmgEmp.prototype.CheckInTimeClause = function () {
        console.log("".concat(this.EmpName, " should check-in to the ffice by ").concat(this.ShiftStartTime));
    };
    return KpmgEmp;
}());
var Satish = new KpmgEmp();
Satish.EmpId = 1001;
Satish.EmpName = "Satish";
Satish.Designation = "Analyst";
Satish.ShiftStartTime = "9am";
Satish.WorkHoursClaue();
Satish.CheckInTimeClause();
