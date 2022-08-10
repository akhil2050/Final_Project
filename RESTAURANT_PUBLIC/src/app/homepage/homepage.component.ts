import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant'
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

 foods: Restaurant[] | undefined;
 chefs: Restaurant[] | undefined;

  constructor(private restaurantService: RestaurantService,
    private router: Router ) { }

  ngOnInit(): void {
    this.restaurantService
    .getFoods()
    .subscribe((foods: Restaurant[]) => {
      this.foods = foods.map ( food => {
        return food;
      });
      
    
    });

    this.restaurantService
    .getChefs()
    .subscribe((chefs: Restaurant[]) => {
      this.chefs = chefs.map ( chef => {
        return chef;
      });
    
    });
  }

  pageContent = {
    header: {
      title:'',        
      body: ''
    }
  };
}

