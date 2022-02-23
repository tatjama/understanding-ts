"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        /*  private id: string;
            public name: string;
            private employees: string[] = [];
        
            constructor(id:string, name: string){
                this.id = id
                this.name = name;
                this.employees = [];
            }*/
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformation() {
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admin) {
        super(id, 'IT');
        this.admin = admin;
    }
    describe() {
        console.log('This departmant id ' + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No last report");
    }
    describe() {
        console.log('this departmant have reports');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please provide a value");
        }
        this.addEmployee(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('42', []);
        return this.instance;
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(report) {
        this.reports.push(report);
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('afght45', ['Admin']);
it.name = 'Administ';
it.printEmployeesInformation();
console.log(it);
const employee1 = Department.createEmployee('Dragan');
console.log(employee1, Department.fiscalYear);
//const accounting = new AccountingDepartment('hhjhk',[]);
const accounting = AccountingDepartment.getInstance();
accounting.addEmployee('Tanja');
accounting.addEmployee(employee1.name);
accounting.printEmployeesInformation();
accounting.mostRecentReport = 'Newest report';
console.log(accounting.mostRecentReport);
accounting.addReport('Something get wrong');
accounting.printReports();
/*accounting.describe();
accounting.addEmployee('Jo');
accounting.addEmployee('Merry');*/
//accounting.employees[2] = 'ANNA';
//accounting.printEmployeesInformation();
/*const accountingCopy = { name: 'DUMMY', describe: accounting.describe}
accountingCopy.describe();*/ 
//# sourceMappingURL=classes.js.map