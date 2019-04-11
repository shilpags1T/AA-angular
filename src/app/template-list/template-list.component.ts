import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TemplatelistServiceService } from '../_services/templatelist-service.service';
import { Observable } from 'rxjs';
import { Popup } from 'ng2-opd-popup';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {
  allTemplates:Observable<any[]>;
  template:any;
  @ViewChild('popup1') popup1: Popup;
  constructor(private router: Router,private formBuilder: FormBuilder,private http: HttpClient,private templatelistservice:TemplatelistServiceService) { }

  createTemplateForm: FormGroup;
  submitted=false;
  loading: boolean;
  disabled=true;
  activeTab = true;
  ngOnInit() {
    this.createTemplateForm= this.formBuilder.group({
      name: ['', Validators.required],
      description: ['']
    });
    
  }
  getArchives(){
    this.allTemplates=this.templatelistservice.getArchives();
  }
  // setTemplateTab(tab: TabsOptions){
  //   this.currentTab = tab;
  //   // this.switchtab=false;
  //   // this.router.navigateByUrl('../template-list')
  // }
  clickButton(){
    this.submitted =false;
    this.popup1.options={
      header: "Create template",
      confirmBtnContent: "Create Template",
      showButtons: false,
      cancleBtnContent: "Cancel",
    }
    this.popup1.show(this.popup1.options);
  }

  get formValues() { 
    return this.createTemplateForm.controls;   
  }

  onSubmit() {
    this.submitted = true;
    //  console.log(this.createTemplateForm.invalid);
      if (this.createTemplateForm.invalid) {
          return;
      }
      this.loading = true;
      this.templatelistservice.postTemplates(this.formValues.name.value, this.formValues.description.value)
      .subscribe((data)=>{
        if (data) {
          this.router.navigateByUrl(`/builder/${data.rootVersionId}/${data.templateVersion}`);
          console.log(data);
          
        }
      },error=>{
        alert("duplicate template name.");
        console.log(error)
      });
      // console.log(this.template);
      this.router.navigateByUrl('/builder');
  }

  enableCreateButton() {
    let bt = document.getElementById('btSubmit');
    if (this.formValues.name.value != '') {
      this.disabled = false;
      bt.style.backgroundColor="dodgerblue";
    }
    else {
        this.disabled = true;
        }
  }  
  
  abc() {
    // console.log(this.submitted);  
  }

}
