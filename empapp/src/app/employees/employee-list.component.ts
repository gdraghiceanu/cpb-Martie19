import { Component } from '@angular/core';

@Component({
    selector: 'app-emp-list',
    templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {

    text: string;

    employees =  [
        {
        "userId":"rirani",
        "jobTitleName":"Developer",
        "firstName":"Romin",
        "lastName":"Irani",
        "employeeCode":"E1",
        "region":"CA",
        "phoneNumber":"408-1234567",
        "emailAddress":"romin.k.irani@gmail.com", 
        "onlineContact" : "www.mysite.com",        
        "imageUrl": "/assets/images/angularconnect-shield.png"
        },
        {
        "userId":"nirani",
        "jobTitleName":"Developer",
        "firstName":"Neil",
        "lastName":"Irani",
        "employeeCode":"E2",
        "region":"CA",
        "phoneNumber":"408-1111111",
        "emailAddress":"neilrirani@gmail.com",
        "location": {
            "address": "1057 DT",
            "city": "London",
            "country": "England"
          },
        "imageUrl": "/assets/images/angularconnect-shield.png"
        },
        {
        "userId":"thanks",
        "jobTitleName":"Program Directory",
        "firstName":"Tom",
        "lastName":"Hanks",
        "employeeCode":"E3",
        "region":"CA",
        "phoneNumber":"408-2222222",
        "emailAddress":"tomhanks@gmail.com",
        "location": {
            "address": "1057 DT",
            "city": "London",
            "country": "England"
          },
        "imageUrl": "/assets/images/angularconnect-shield.png"
        }
    ];       

handleEveFromChild(val: any) {
    this.text = val;
}

}

