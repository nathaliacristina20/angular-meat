import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private restauranteService: RestaurantsService, private route: ActivatedRoute) { }

  reviews: Observable<any>;

  ngOnInit() {
    this.reviews = this.restauranteService.reviewsOfRestaurants(this.route.parent.snapshot.params['id']);
  }

}
