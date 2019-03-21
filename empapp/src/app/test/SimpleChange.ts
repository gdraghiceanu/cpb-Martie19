import { Component, OnChanges, SimpleChanges, Input } from "@angular/core";

@Component({
    selector: 'app-simpleChange',
    template: `You entered: {{simpleText}} `
})
export class SimpleChange implements OnChanges {

    @Input() simpleText: string;

    ngOnChanges(changes: SimpleChanges ): void {

        for(const property in changes) {
            const changeVar = changes[property];
            const curentVar = JSON.stringify(changeVar.currentValue);
            const previousVar = JSON.stringify(changeVar.previousValue);

            console.log(`Valoare curenta = ${curentVar}, Valoarea trecuta: ${previousVar}`);
        }

    }

}