
export class Employee {
    userId: number;
    jobTitleName: string;
    firstName: string;
    lastName: string;
    employeeCode: string;
    region: string;
    salary: number;
    phoneNumber: string;
    emailAddress: string;
    imageUrl: string;
    website?: string;
    location?: Location;
}

export class Location {
    address?: string;
    city?: string;
    country?: string;
}

