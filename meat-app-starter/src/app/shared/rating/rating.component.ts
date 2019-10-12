import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  @Output() rated = new EventEmitter<number>();

  rates: number[] = [1, 2, 3, 4, 5];
  rate: number = 0;
  previousRating: number;

  ngOnInit() {
  }

  setRate(r: number){
    this.rate = r;
    this.previousRating = undefined;
    this.rated.emit(this.rate);
  }

  setTemporaryRate(r: number){
    if (this.previousRating === undefined){
        this.previousRating = this.rate;
    }
    this.rate = r;
  }

  clearTemporaryRate(){
    if (this.previousRating !== undefined){
      this.rate = this.previousRating;
      this.previousRating = undefined;
    }
  }

}
