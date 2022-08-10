import { Component, OnInit } from '@angular/core';
import { Restaurant, Chefs, Locator, Recipe} from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [RestaurantService]
})
export class CreateComponent implements OnInit {

  public newRestaurant: Restaurant = {
    _id: '',
    name: '',
    type: '',
    quantity: '',
    discount: '',
    total: ''
}

public newChef: Chefs = {
    _id: '',
    name: '',    
    description: '',
    imgUrl:''
}

public newLocator: Locator = {
  _id: '',
  branch: '',
  address: '',
  city: '',
  phone: '',
  email: ''
}

public newRecipe: Recipe = {
  _id: '',
  title: '',
  ingredients: '',
  type: '',
  cookingTime: '',
  description: '',
  imgUrl: ''
}

  constructor(private restaurantDataService: RestaurantService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public createNewChef(newChef:Chefs): void {
    this.restaurantDataService.createNewChef(newChef);
    this.router.navigate(['/'])
    .then(() => {
      window.location.reload();
    });   
  }

}
