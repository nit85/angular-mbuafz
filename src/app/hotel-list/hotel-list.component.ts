import { Component, OnInit } from '@angular/core';
import {HotelService} from '../hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

hotels=[];
constructor(private hotelService:HotelService){}
  // gán cho biến hotels tất cả cách danh sách để tý nữa hiển thị name
  ngOnInit() {
   this.hotelService.getListHotel().subscribe(data =>{
     console.log(data);
     this.hotels=data;
   })
   
  }
 
}