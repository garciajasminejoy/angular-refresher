import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit {
    @Input() personList: string[];

    constructor() {
        console.log(this.personList);
    }

    ngOnInit(): void {
        console.log(this.personList);
    }
}
