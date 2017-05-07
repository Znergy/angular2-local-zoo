import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Animal } from '../animal.model';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
  providers: [ AnimalService ]
})
export class AnimalComponent {
  animalId: string;
  animalToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private animalService: AnimalService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.animalId = urlParameters['id'];
   });
   this.animalToDisplay = this.animalService.getAnimalById(this.animalId);
  }
}
