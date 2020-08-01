import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PersonsService } from './persons.sevice';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
    personList: string[];
    isFetching = false;

    private personListSubs: Subscription;

    constructor(private personsService: PersonsService) {
    }

    ngOnInit(): void {
        this.personListSubs = this.personsService.personsChanged.subscribe(persons => {
            this.personList = persons;
            this.isFetching = false;
        });
        this.isFetching = true;
        this.personsService.fetchPersons();
    }

    ngOnDestroy(): void {
        this.personListSubs.unsubscribe();
    }

    removePerson(name: string): void {
        this.personsService.removePerson(name);
    }
}
