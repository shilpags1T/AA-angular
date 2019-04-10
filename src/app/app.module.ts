import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSubMenuComponent } from './left-sub-menu/left-sub-menu.component';
import { TemplateLayoutComponent } from './template-layout/template-layout.component';

import { RouterModule,Routes } from '@angular/router';
import{ PopupModule } from 'ng2-opd-popup';
import {FormsModule, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { NgxPopper } from 'angular-popper';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule,HTTP_INTERCEPTORS }    from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.interceptor';
 import { BuilderComponent } from './builder/builder.component';
import { TemplateDetailsComponent } from './template-details/template-details.component';
import { LoginComponent } from './login/login.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { JwtInterceptor } from './_jwt-interceptors/jwt.interceptor';
import { OtTemplateCardsComponent } from './ot-template-cards/ot-template-cards.component';
import { ArchiveTemplatesComponent } from './archive-templates/archive-templates.component';
import { AssessmentsComponent } from './assessments/assessments.component';
const appRoutes: Routes = [
 
  {path:'template-details/:Id',component:TemplateDetailsComponent},
  {path: 'builder/:rootVersionId/:templateVersion', component: BuilderComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'template-list',component:TemplateListComponent ,pathMatch:'full'},
  {path:'ot-template-cards',component:OtTemplateCardsComponent ,pathMatch:'full'},
  {path:'assessments',component:AssessmentsComponent ,pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftSubMenuComponent,
    TemplateLayoutComponent,
    BuilderComponent,
    TemplateDetailsComponent,
    LoginComponent,
    TemplateListComponent,
    OtTemplateCardsComponent,
    ArchiveTemplatesComponent,
    AssessmentsComponent,
 
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(
          appRoutes,
          ),
      HttpClientModule,
      BsDropdownModule.forRoot(),
      PopupModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      NgxPopper
     // BrowserAnimationsModule,
      //ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
