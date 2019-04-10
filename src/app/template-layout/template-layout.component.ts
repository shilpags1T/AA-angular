import { Component, OnInit } from '@angular/core';
import { Popup } from 'ng2-opd-popup';
import {Router} from '@angular/router';
import {Templates} from '../templates';
import {TemplateService} from '../template.service';
import { ToastrService } from 'ngx-toastr';
import {Observable} from 'rxjs'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-template-layout',
  templateUrl: './template-layout.component.html',
  styleUrls: ['./template-layout.component.css']
})

export class TemplateLayoutComponent implements OnInit {
  
  template1={} as Observable<Templates>;
  template = {} as Templates;
  templateList: Observable<Templates[]>;
  data={} as Templates ;
  Id:string;
  createForm: FormGroup;
  submitted = false;

  constructor(private popup:Popup , private templateservice:TemplateService, private router: Router,private formBuilder: FormBuilder ) { }
  
  clickButton(){
    this.popup.options={
      header: "Create template",
      confirmBtnContent: "Create Template",
      showButtons: true,
      cancleBtnContent: "Cancel",
     // confirmBtnClass: "btn btn-default",
      //cancleBtnClass:"btn btn-default",
    }
    this.popup.show();
   }

  ngOnInit() {
    this.reloadData();
   
  }
  
 
  save() {
    // console.log( this.templateservice.createTemplate(this.template));
    this.templateservice.createTemplate(this.template)
      .subscribe(data => this.reloadData(), error => console.log(error));  
    this.router.navigateByUrl('/builder');  
  }

  onSubmit() {
    this.submitted=true;
    this.save();
    
  }
  
  reloadData() {
    // console.log(this.templateservice.getTemplatesList());
    this.templateList = this.templateservice.getTemplatesList();  
    
  }
  getTemplateById(Id:string){
   
      this.Id=Id;
      console.log(Id);
    //  console.log(this.templateservice.getTemplate(this.id).subscribe(data=>console.log(data),error => console.log(error)));
      this.templateservice.getTemplate(this.Id).subscribe(data=>console.log(data),error => console.log(error));
      this.router.navigateByUrl('/template-details/'+ this.Id);
      
 }
  

 
 }
