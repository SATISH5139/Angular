var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    //operations = functions = methods
    Employee.prototype.works = function () {
        var tasks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tasks[_i] = arguments[_i];
        }
        console.log(this.Name + "Details are following: ");
        for (var i = 0; i < tasks.length; i++) {
            console.log(tasks[i]);
        }
    };
    Employee.prototype.AssignIncome = function (salary) {
        this.Salary = salary; //to assign the value to the protected property
    };
    return Employee;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.printTotalRefund = function () {
        console.log(this.Name + "has received a total refund of ");
        if (this.Salary > 300000) {
            console.log("INR 10000");
        }
        else {
            console.log("INR 3000");
        }
    };
    return Admin;
}(Employee));
var auditor = new Admin();
auditor.Name = "Prakash";
auditor.Empid(12345);
auditor.Designation("Analyst");
auditor.Emailid("satishkumar@gmail.com");
auditor.Salary(500000);
