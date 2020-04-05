import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

@Input() compteur : number;
@Output() eventCompteur = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  incrementer() {
  	this.compteur++;
  	this.eventCompteur.emit({
  		value:this.compteur
  	})
  }

  decrementer() {
  	this.compteur--;
  	this.eventCompteur.emit({
  		value:this.compteur
  	})
  }

}
