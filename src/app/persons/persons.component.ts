import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PersonsService } from './persons.sevice';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
    personList: string[];

    private personListSubs: Subscription;

    constructor(private personsService: PersonsService) {
    }

    ngOnInit(): void {
        this.personList = this.personsService.persons;
        this.personListSubs = this.personsService.personsChanged.subscribe(persons => {
            this.personList = persons;
        });
    }

    ngOnDestroy(): void {
        this.personListSubs.unsubscribe();
    }

    removePerson(name: string): void {
        this.personsService.removePerson(name);
    }
}
