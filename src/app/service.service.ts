import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  
  
  baseUrl ='http://localhost:3000/News';
  constructor(private http: HttpClient) {
    
   } 
    fetchNews() :Observable<any> {
   
    return this.http.get(`${this.baseUrl}`)
  }  


        store(id:number,value:string,timevalue):Observable<any> {
            var a= this.http.get(`${this.baseUrl}/${id}`)
              console.log(a);
               return a;
                 // let data = JSON.stringify(value);
                  //  console.log("ad")
                 //  return this.baseUrl.patch(`${this.baseUrl}/${id}`,value)
    
     
    } 
       patch1(id,a,title,timevalue){
           let b=a;
            b.push(title + '   ' + timevalue);
            return this.http.patch(`${this.baseUrl}/${id}`,{comments:a});
      //console.log(id)
      //console.log("hey aditya")
      //console.log(a)
    } 
    fetchComments() :Observable<any> {
   
      return this.http.get(`${this.baseUrl}`)
    }  









}
