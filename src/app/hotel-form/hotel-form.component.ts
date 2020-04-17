import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import {HotelService} from '../hotel.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-hotel-form",
  templateUrl: "./hotel-form.component.html",
  styleUrls: ["./hotel-form.component.css"]
})
export class HotelFormComponent implements OnInit {
  hotelForm=new FormGroup({ 
    id: new FormControl(''),
    name: new FormControl(''),
    logo: new FormControl(''),
    address: new FormControl(''),
    country: new FormControl(''),
  });
  

  constructor(
     private hotelService:HotelService,
     private route: Router,
     private activedRoute : ActivatedRoute
  ) {}

// hiển thị dữ liệu lên khi bấm edit  
  ngOnInit() {
this.activedRoute.paramMap.subscribe(params => {
  let hotelId=params.get('id');
  if(hotelId !=null){
    this.hotelService.getHotelById(hotelId).subscribe(data => {
      this.hotelForm.setValue(data);
    })
  }
})

  }

  saveHotel() {
    if(this.hotelForm.value.id !=null){
      this.hotelService.editHotel(this.hotelForm.value).subscribe(data => {
        this.route.navigate(['']);
      })
    }else {
      this.hotelService.addNewHotel(this.hotelForm.value).subscribe(data => {
        this.route.navigate(['']);
      })
    }

    
}
}