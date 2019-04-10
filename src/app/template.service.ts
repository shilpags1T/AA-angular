import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse  } from '@angular/common/http';
import{Observable} from 'rxjs/Observable';
import{Templates} from './templates';
import "rxjs/Rx";
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TemplateService {
 
  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/templates';

  createTemplate(template: Templates): Observable<Templates> {
         return this.http.post<Templates>(`${this.baseUrl}`, template);
  }
  getTemplatesList(): Observable<Templates[]> {
    // console.log(this.http.get(this.baseUrl));
    return this.http.get<Templates[]>(this.baseUrl) ;

  }
  
 getTemplate(id: string): Observable<Templates> {
    
    // console.log(this.http.get<Templates>(`${this.baseUrl}/${id}`));
    return this.http.get<Templates>(`${this.baseUrl}/${id}`);
    
  }
  
}