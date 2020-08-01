import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PersonsService {
    persons: string[] = ['Max', 'Manuel', 'Anna'];

    addPerson(name: string): void {
        this.persons.push(name);
    }
}
