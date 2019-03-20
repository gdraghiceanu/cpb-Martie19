import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'empapp';

    filterToSend: string;

    receiveFromNav(value: string) {
        this.filterToSend = value;
    }

}
