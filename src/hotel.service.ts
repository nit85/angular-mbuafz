import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Observable, observable } from 'rxjs';

const hotelApiUrl='https://5e7b08500e0463001633293d.mockapi.io/schools';
@Injectable()
export class HotelService {
  
  // Lấy tất cả các dữ liệu của collection hotels  
  constructor(private http:HttpClient){}
    getListHotel(): Observable<any>{
      return this.http.get<any>(hotelApiUrl);
    }
    // Tìm kiếm theo id
   getHotelById(id): Observable<any>{
    let url= `${hotelApiUrl}/${id}`;
    return this.http.get<any>(url);
  }
 removeHotelById(id): Observable<any>{
    let url = `${hotelApiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
  
  addNewHotel(obj): Observable<any>{
    return this.http.post<any>(hotelApiUrl, obj);
  }

  editHotel(obj): Observable<any>{
    let url = `${hotelApiUrl}/${obj.id}`;
    return this.http.put<any>(url, obj);
  }

  

}