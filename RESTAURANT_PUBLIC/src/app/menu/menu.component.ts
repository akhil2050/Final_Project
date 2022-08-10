import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant'
import { RestaurantService } from '../restaurant.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[RestaurantService]
})
export class MenuComponent implements OnInit {

  foods: Restaurant[] | undefined;
  foodsListMaster: Restaurant[] | undefined;
  foodListFiltered : Restaurant[] | undefined;
  
  length : number | undefined;
  pageSize : number = 5;
  totalPage: number = 0;
  pageIndex : number = 1;
  searchMenu: string = "";
  
  public newFood: Restaurant = {
      _id:'',
      name:'',
      type:'',
      quantity:'',
      discount:'',
      total:''
  }
  
  constructor(private restaurantService: RestaurantService,
    private router: Router ) { }

    getTotalPages() {
      this.totalPage = this.length ? Math.ceil(this.length / this.pageSize) : 0;
    }
  

  ngOnInit(): void {

    this.restaurantService
    .getFoods()
    .subscribe((foods: Restaurant[]) => {
      this.foods = foods.map ( food => {
        return food;
      });
      this.foodsListMaster = [...this.foods];
      this.foodListFiltered = [...this.foods];

      this.length = this.foods.length;
      this.pageIndex = 1;
      this.getTotalPages();
      this.getData()
    
    });
  }
  pageContent = {
    header: {
      title:'Welcome to Menu',        
      body: 'Find the Right item for You'
    }
  };

  public createFood(newFood: Restaurant): void {
    this.restaurantService.createFood(newFood);
    this.router.navigate(['/menu'])
    .then(() => {
      window.location.reload();
    });   
  }  

  handleSearch() {
    if(this.foodsListMaster) {
      this.foodListFiltered = (this.foodsListMaster).filter(item => (item.name.toLowerCase()).indexOf(this.searchMenu.toLowerCase()) >= 0);

      this.length = this.foodListFiltered.length;
      this.pageIndex = 1;
      this.getTotalPages();
      this.getData()

    }

  }

  prevPage() {
    if(this.pageIndex > 1) {
      this.pageIndex--;
      this.getData();
    }
  }

  nextPage() {
      if(this.pageIndex < this.totalPage) {
        this.pageIndex++;
        this.getData();
      }
   
  }

  getData() {
    if(this.foodsListMaster && this.foodListFiltered) {
      const endIndex = this.pageIndex * this.pageSize;
      const startIndex = endIndex - this.pageSize;

      this.foods = this.foodListFiltered.slice(startIndex, endIndex);
      
    }
  }
 
  onEdit(curFood: Restaurant) {
    console.log(curFood)
    this.newFood = curFood;
  }

  onDelete(id:string) {
    this.restaurantService.deleteFood(id).subscribe({
          complete: () => { 
              window.location.reload();
           }
        });
  }

  public updateFood(newFood: Restaurant): void {
    this.restaurantService.updateFood(newFood);
    this.router.navigate(['/menu'])
    .then(() => {
      window.location.reload();
    });   
  } 

}
