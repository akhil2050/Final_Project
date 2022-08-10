import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

import { FrameworkComponent } from './framework/framework.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { MenuComponent } from './menu/menu.component';
import { RecipeComponent } from './recipe/recipe.component';
import { StoreLocatorComponent } from './store-locator/store-locator.component';
import { CreateComponent } from './create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    FrameworkComponent,
    HeaderComponent,    
    MainHomeComponent,
    HomepageComponent,
    MenuComponent,
    RecipeComponent,
    StoreLocatorComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainHomeComponent
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'recipe',
        component: RecipeComponent
      },
      {
        path: 'store-locator',
        component: StoreLocatorComponent
      },
      {
        path:'recipes/:recipeid',
        component:RecipeComponent
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue:'/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
