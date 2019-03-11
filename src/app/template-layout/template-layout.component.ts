import { Component, OnInit } from '@angular/core';
import { Popup } from 'ng2-opd-popup';
import {Router} from '@angular/router';
import {Templates} from '../templates';
import {TemplateService} from '../template.service';
import { ToastrService } from 'ngx-toastr';
import {Observable} from 'rxjs'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShareDataService } from '../sharedService/share-data.service';
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
  submitted= false;
  data={} as Templates ;
  id:number;

  @Output() redirect:EventEmitter<any> = new EventEmitter();

  constructor(private popup:Popup , private templateservice:TemplateService,private router: Router,private formBuilder: FormBuilder,private sharedataservice:ShareDataService ) { }
  
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
    
    this.templateservice.createTemplate(this.template)
      .subscribe(data => this.reloadData(), error => console.log(error));  
    //this.template = newTemplate;
    this.router.navigateByUrl('/builder');  
  }

  onSubmit() {
    this.submitted=true;
    this.save();
  }
  
  reloadData() {
    this.templateList = this.templateservice.getTemplatesList();  
    
  }
 getTemplateById(templateId:number){
   
      this.id=templateId;
      this.template1=this.templateservice.getTemplate(this.id);
      // console.log(this.template1);
      this.sharedataservice.setData(this.template1);
      this.router.navigateByUrl('/template-details/'+this.id);
      
 }
  onClick(templateId:number){
    this.getTemplateById(templateId); 
  }
 
 }
