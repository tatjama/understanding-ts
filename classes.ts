abstract class Department{
/*  private id: string;  
    public name: string;
    private employees: string[] = [];

    constructor(id:string, name: string){
        this.id = id
        this.name = name;
        this.employees = [];
    }*/
    protected employees: string[] = [];

    constructor(protected id : string, public name: string){

    }

    static fiscalYear = 2020;

    static createEmployee(name:string){
        return {name:name}
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeesInformation(){
        console.log(this.employees)
    }
}

class ITDepartment extends Department{
    public admin: string[];

    constructor(id:string, admin:string[]){
        super(id, 'IT');
        this.admin = admin;
    }

    describe(){
        console.log('This departmant id ' + this.id)
    }
}

class AccountingDepartment extends Department{

    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error("No last report");        
    }

    describe(){
        console.log('this departmant have reports')
    }

    set mostRecentReport(value: string){
        if(!value){
            throw new Error("Please provide a value")
        }
        this.addEmployee(value)
    }

    private constructor(id:string, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance(){
        if(AccountingDepartment.instance){
            return this.instance
        }
        this.instance = new AccountingDepartment('42', []);
        return this.instance;
    }

    addEmployee(name:string){
        if(name === 'Max'){
            return;
        }
        this.employees.push(name);
    }

    addReport(report: string){
        this.reports.push(report)
    }

    printReports(){
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