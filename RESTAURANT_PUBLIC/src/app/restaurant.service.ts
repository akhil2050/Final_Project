import { Injectable } from '@angular/core';
import { Restaurant, Chefs, Locator, Recipe } from './restaurant'
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private foodsUrl = 'http://localhost:3000/api/food'
  private chefsUrl = 'http://localhost:3000/api/chef'
  private locatorUrl = 'http://localhost:3000/api/locator'
  private recipeUrl = 'http://localhost:3000/api/recipes'

  constructor(private http: HttpClient,
    private router: Router) { }

   //retrive all the foods
   getFoods() {    
    return this.http.get<Restaurant[]>(this.foodsUrl);   
   } 

   getSingleFood(id: string) {
    return this.http.get<Restaurant>(this.foodsUrl + '/' + id);
  } 
    //retrive all the Chefs
    getChefs() {    
      return this.http.get<Restaurant[]>(this.chefsUrl);   
    }
    getLocator(){
      return this.http.get<Locator[]>(this.locatorUrl);
    } 
    getRecipe(){
      return this.http.get<Recipe[]>(this.recipeUrl);
    }

    createNewChef(chef: Chefs) {
      return this.http.post<Chefs>(this.chefsUrl, chef)
        .subscribe((chef : Chefs)=>{
          console.log(chef);  
        })
    }

    createLocator(locator: Locator) {
      return this.http.post<Locator>(this.locatorUrl, locator)
        .subscribe((locator : Locator)=>{
          console.log(locator);          
        })
    }

    createFood(food: Restaurant) {
      return this.http.post<Restaurant>(this.foodsUrl, food)
        .subscribe((food : Restaurant)=>{
          console.log(food);  
        })
    }

    createRecipe(recipe: Recipe) {
      return this.http.post<Recipe>(this.recipeUrl, recipe)
        .subscribe((recipe : Recipe)=>{
          console.log(recipe);  
        })
    }

    deleteFood(id:string){
      return this.http.delete<Restaurant>(this.foodsUrl + '/' + id);
    }
    getSingleRecipe(id:string)
    {
      return this.http.get<Recipe>(this.recipeUrl + '/' + id);
    }

    updateFood(newFood: Restaurant) {
      return this.http.put<Restaurant>(this.foodsUrl + '/' + newFood._id, newFood)
        .subscribe((newFood : Restaurant)=>{
          console.log(newFood);  
      })
    }
}
