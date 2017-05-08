import { Component } from '@angular/core';
import { Animal } from '../animal.model';
import { AnimalService } from '../animal.service';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css'],
  providers: [ AnimalService ]
})
export class NewAnimalComponent {

  constructor(private animalService: AnimalService) { }

  submitForm(newSpecies: string, newName: string, newAge: string, newDiet: string, newCaretaker: string, newSex: string, newLikes: string, newDislikes: string) {
    var newAnimal: Animal = new Animal(newSpecies, newName, newAge, newDiet, newCaretaker, newSex, newLikes, newDislikes);
    this.animalService.addAnimal(newAnimal);
    window.location.href = '/animals';
  }

}
