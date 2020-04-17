import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {HotelService} from '../hotel.service';

// Lấy ID

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

hotelId=null;
hotelDetail=null;
  constructor(
    private route:Router,
    private activateRoute: ActivatedRoute,
    private hotelService:HotelService
  ) { }

  ngOnInit() {
    this.hotelId=this.activateRoute.paramMap.subscribe(params =>{
      this.hotelId=Number(params.get('id'));
      this.hotelService.getHotelById(this.hotelId).subscribe(data => {
        this.hotelDetail=data;
      })
    })
  }
  
   removeHotel(){
     this.hotelService.removeHotelById(this.hotelDetail.id).subscribe(data => {
       this.route.navigate(['']);
     })
   }
}