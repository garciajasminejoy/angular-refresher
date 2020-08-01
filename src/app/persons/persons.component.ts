import { Component, OnInit } from '@angular/core';

import { PersonsService } from './persons.sevice';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit {
    personList: string[];

    constructor(private personsService: PersonsService) {
    }

    ngOnInit(): void {
        this.personList = this.personsService.persons;
    }
}
