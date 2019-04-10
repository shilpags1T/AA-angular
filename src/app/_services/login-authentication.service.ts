import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticationService {
  client_Id='onetrust';
  tenant_id='32bbd740-ee80-4b30-ad6d-14c4e7fefff3';
  
  constructor(private http: HttpClient,private router: Router) { }

  login(email: string, password: string):Observable<any>{
   
    let body = new URLSearchParams();
    body.set('grant_type','password');
    body.set('username', email);
    body.set('password', password);
    body.set('client_id',this.client_Id);
    body.set('tenant_id',this.tenant_id);
    
   let options={
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
        
    };
      return this.http.post<any>(`https://pia1-app.dev.otdev.org/api/v1/private/token`,body.toString(),options)
      .pipe(map(user => {
           // console.log(user);
        if (user && user.access_token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
           
        }
        return user;
    }
    ));
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
}
