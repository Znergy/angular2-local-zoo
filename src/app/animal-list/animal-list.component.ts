import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal.model';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css'],
  providers: [ AnimalService ]
})

export class AnimalListComponent implements OnInit {
  animals: Animal[];
  filter: string = 'all';

  constructor(private router: Router, private animalService: AnimalService){}

  ngOnInit() {
    this.animalService.getAnimals().subscribe(animals => this.animals = animals);
  }

  goToDetailPage(clickedAnimal) {
    this.router.navigate(['animals', clickedAnimal.$key]);
  };
}
