import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import{Observable} from 'rxjs/Observable';
import { TemplateDetails } from '../templates';
import { WelcomeText } from '../templates.constants.ts';

@Injectable({
  providedIn: 'root'
})

export class TemplatelistServiceService {
  id:string;
  version:string;

  constructor(private http: HttpClient) { }

  ngOnInit(){ }

  getTemplates():Observable<TemplateDetails[]>{
    return this.http.get<TemplateDetails[]>(`https://pia1-app.dev.otdev.org/api/template/v1/templates/details?type=PIA`);
  }
  getArchives():Observable<any[]>{
    return this.http.get<any>(`https://pia1-app.dev.otdev.org/api/template/v1/templates/details?type=PIA&active=false`);
  }
  getTemplateById(id:string,version:number = 1):Observable<TemplateDetails>{
     return this.http.get<TemplateDetails>(`https://pia1-app.dev.otdev.org/api/template/v1/templates/rootversion/${id}?version=${version}`);
  }
  postTemplates(name:string,description:string): Observable<any>{
    let templatedata = {
      description: description,
      icon: "ot-archive",
      name: name,
      orgGroupId: "89cc99bb-d1c2-4d2b-8775-e6ea8d6e1f77",
      templateType: "PIA",
      welcomeText: WelcomeText.text,
    }
    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        
    };
    return this.http.post<any>('https://pia1-app.dev.otdev.org/api/template/v1/templates',templatedata,options);
  }
  deleteDraft(rootVersionId:string){
      return this.http.delete<any>('https://pia1-app.dev.otdev.org/api/template/v1/templates/'+rootVersionId);
  }
  // getTemplate(id: string): Observable<TemplateDetails> {
    
  //   // console.log(this.http.get<Templates>(`${this.baseUrl}/${id}`));
  //   return this.http.get<Templates>(`${this.baseUrl}/${id}`);
    
  // }
  
}
