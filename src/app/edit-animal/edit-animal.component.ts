import { Component, OnInit, Input } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Animal } from '../animal.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css'],
  providers: [ AnimalService ]
})
export class EditAnimalComponent implements OnInit {
  animalId: string;
  currentAnimal;

  isFormShowing: boolean = false;

  // updateAnimal(newSpecies: string, newName: string, newAge: string, newDiet: string, newCaretaker: string, newSex: string, newLikes: string, newDislikes: string) {
  //   var newAnimal: Animal = new Animal(newSpecies, newName, newAge, newDiet, newCaretaker, newSex, newLikes, newDislikes);
  //   this.animalService.updateAnimal(newAnimal);
  //   this.isFormShowing = false;
  // }

  updateAnimal(currentAnimal) {
    this.animalService.updateAnimal(currentAnimal);
  }

  constructor(private animalService: AnimalService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.animalId = urlParameters['id'];
   });
   this.currentAnimal = this.animalService.getAnimalById(this.animalId);
  }

}
