import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
   } from '@angular/common/http';
   import { Observable, throwError } from 'rxjs';
   import { retry, catchError } from 'rxjs/operators';
  //import{ToastrService}from 'ngx-toastr';
   import{ToastrManager}from 'ng6-toastr-notifications';
   
   export class HttpErrorInterceptor implements HttpInterceptor {
    //constructor(public toastr: ToastrManager) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
        .pipe(
          retry(1),
          catchError((error: HttpErrorResponse) => {
            let errorMessage = '';
            
            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Error: ${error.error.message}`;
            } else {
              // server-side error
              errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            //this.toastr.errorToastr('This is error toast.', 'Oops!');
            window.alert('this template name already used');
            //this.toasterService.error(errorMessage);
            return throwError(errorMessage);
          })
        )
    }
   }