import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelService } from './hotel.service';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelFormComponent } from './hotel-form/hotel-form.component';
import { RoomService } from './room.service';


@NgModule({
  imports:    
    [ BrowserModule,  FormsModule,HttpClientModule,ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component:HotelListComponent},
      {path:'detail-hotel/:id   ', component: HotelDetailComponent},
      {path: 'add-school', component: HotelFormComponent},
      {path: 'edit-hotel/:id', component: HotelFormComponent},
    ])
   ],
  declarations: [ AppComponent, HelloComponent, HotelListComponent, HotelDetailComponent, HotelFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ HotelService, RoomService]
})
export class AppModule { }
