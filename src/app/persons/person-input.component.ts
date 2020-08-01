import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-person-input',
    templateUrl: './person-input.component.html',
    styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
    @Output() personCreate = new EventEmitter<string>();
    enteredPersonName = '';

    onPersonCreate(): void {
        this.personCreate.emit(this.enteredPersonName);
        this.enteredPersonName = '';
    }

}
