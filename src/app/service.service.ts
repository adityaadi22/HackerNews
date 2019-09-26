import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as uuid from 'uuid';
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
           } 
       id1 = uuid.v4();
        textareacontent=[];
     patch1(id,patcharray,title,timevalue){
         let b=patcharray;
           this.textareacontent.push(title)
            b.push({"key":this.id1,"value":this.textareacontent,timevalue});
             return this.http.patch(`${this.baseUrl}/${id}`,{comments:b});
          }
          fetchComments() :Observable<any> {
             return this.http.get(`${this.baseUrl}`)
            }  
}
