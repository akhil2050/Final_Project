import { Component, OnInit } from '@angular/core';
import { Recipe } from '../restaurant';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RestaurantService]
})
export class RecipeComponent implements OnInit {
  rec!:Recipe[];
  public newRecipe: Recipe = {
    _id:'',
    title:'',
    ingredients:'',
    type:'',
    cookingTime:'',
    description:'',
    imgUrl:''
}
  constructor(private restaurantService: RestaurantService,
    private router: Router) { }

  ngOnInit(): void {
    this.restaurantService
    .getRecipe()//function call for getting all movies
    .subscribe((rec:Recipe[])=>{
      this.rec = rec.map(recip=>{
        return recip;
      });
    });
  }

  public createRecipe(newRecipe: Recipe): void {
    this.restaurantService.createRecipe(newRecipe);
    this.router.navigate(['/'])
    .then(() => {
      window.location.reload();
    });   
  }  

  onClick(newRecip:Recipe)
  {
    this.restaurantService.getSingleRecipe(newRecip._id)
    .subscribe((newRecipe: Recipe)=>{
      this.newRecipe = newRecipe;
    });
  }

}
