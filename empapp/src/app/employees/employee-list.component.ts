import { Component } from '@angular/core';

@Component({
    selector: 'app-emp-list',
    templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
    employee =         {
        'userId':'rirani',
        'jobTitleName': 'Developer',
        'firstName':'Romin',
        'lastName':'Irani',
        'employeeCode':'E1',
        'region':'CA',
        'phoneNumber':'408-1234567',
        'emailAddress':'romin.k.irani@gmail.com',
        'location': {
                            'address': '1057 DT',
                            'city': 'London',
                            'country': 'England1'
                          },
        'imageUrl': '/assets/images/angularconnect-shield.png'
}
}

