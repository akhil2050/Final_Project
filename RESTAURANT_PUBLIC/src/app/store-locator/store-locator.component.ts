import { Component, OnInit } from '@angular/core';
import { Locator } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-locator',
  templateUrl: './store-locator.component.html',
  styleUrls: ['./store-locator.component.css'],
  providers:[RestaurantService]
})
export class StoreLocatorComponent implements OnInit {



  public newLocator: Locator = {
    _id: '',
    branch: '',
    address: '',
    city: '',
    phone: '',
    email: ''
  }
  loc!:Locator[];

   
  constructor(private restaurantDataService: RestaurantService,
    private router: Router) { }

  ngOnInit(): void {
    this.restaurantDataService
    .getLocator()
    .subscribe((loc:Locator[])=>{
      this.loc=loc.map(location=>{
        return location;
      });
    });
  }

  public createLocator(newLocator: Locator): void {
    this.restaurantDataService.createLocator(newLocator);
      window.location.reload();
  }  
  

}
