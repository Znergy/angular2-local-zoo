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
}
