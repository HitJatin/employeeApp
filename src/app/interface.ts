export interface Employee {
    empid: number,
    name: string,
    email: string,
    phone: string,
    salary: number,
    department: string[]
}

export interface EmployeeNoId {
    name: string,
    email: string,
    phone: string,
    salary: number,
    department: string[]
}

export interface Department {
    id: number,
    name: string,
    selected: boolean,
}