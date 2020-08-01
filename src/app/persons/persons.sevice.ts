import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PersonsService {
    personsChanged = new Subject<string[]>();
    persons: string[];

    constructor(private http: HttpClient) {
    }

    fetchPersons(): void {
        this.http.get<any>('https://swapi.dev/api/people')
        .pipe(
            map(resData => {
                return resData.results.map(character => character.name);
            })
        )
        .subscribe(res => {
            this.personsChanged.next(res);
        });
    }

    addPerson(name: string): void {
        this.persons.push(name);
        this.personsChanged.next(this.persons);
    }

    removePerson(name: string) {
        this.persons = this.persons.filter(person => person !== name);
        this.personsChanged.next(this.persons);
    }
}
