import { Injectable } from '@angular/core';
import { Animal } from './animal.model';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Injectable()
export class AnimalService {
  animals: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.animals = db.list('animals');
  }

  getAnimals() {
    return this.animals;
  }

  addAnimal(newAnimal: Animal) {
    this.animals.push(newAnimal);
  }

  getAnimalById(animalId: string){
    return this.db.object('animals/' + animalId);
  }

  updateAnimal(localAnimal) {
    // problem getting the $key..
    var animalFromDatabase = this.getAnimalById(localAnimal.$key);
    animalFromDatabase.update({
      species: localAnimal.species,
      name: localAnimal.name,
      age: localAnimal.age,
      diet: localAnimal.diet,
      caretaker: localAnimal.caretaker,
      sex: localAnimal.sex,
      likes: localAnimal.likes,
      dislikes: localAnimal.dislikes
    });
  }
}
