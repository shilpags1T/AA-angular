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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';

import { HttpClientModule,HTTP_INTERCEPTORS }    from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.interceptor';
 import { BuilderComponent } from './builder/builder.component';
import { TemplateDetailsComponent } from './template-details/template-details.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { SearchTemplatesComponent } from './search-templates/search-templates.component';
import { ShareDataService } from './sharedService/share-data.service';

const appRoutes: Routes = [
  {   
    path: 'template-layout',
    component:TemplateLayoutComponent,
    pathMatch:'full',

  },
  {path:'template-details/:templateId',component:TemplateDetailsComponent},
  {path: 'builder', component: BuilderComponent,pathMatch:'full'},
  
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
    TemplateListComponent,
    SearchTemplatesComponent, 
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(
          appRoutes,
          ),
      HttpClientModule,
      PopupModule.forRoot(),
      FormsModule,
      ReactiveFormsModule
     // BrowserAnimationsModule,
      //ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    ShareDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
