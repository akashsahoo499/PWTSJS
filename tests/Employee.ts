export class Employees1{
    empid:number
    empName:string
    empAge:number
    private empSalary:number
    readonly offer:number
    static companyName="ABC"
    constructor(id:number,name:string,age:number,salary:number,offer:number){
        this.empid=id
        this.empName=name
        this.empAge=age
        this.empSalary=salary
        this.offer=offer
    }
    employeeInformation(){
        console.log(`Employee id is ${this.empid} and Employee name is ${this.empName} and
             Employee age is ${this.empAge} and Employee salary is ${this.empSalary} and
              Employee offer is ${this.offer} and Company name is ${Employees1.companyName}`)
    }
    static displayCompanyName(){
        console.log(`Company name is ${Employees1.companyName}`)
    }
}
const emp=new Employees1(101,"Rahul",25,100000,20000)
console.log(emp.empid)
console.log(emp.empName)
