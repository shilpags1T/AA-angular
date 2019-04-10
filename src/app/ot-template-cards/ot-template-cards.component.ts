import { Component, OnInit, ViewChild } from '@angular/core';
import { TemplatelistServiceService } from '../_services/templatelist-service.service';
import { Popup } from 'ng2-opd-popup';
import { TemplateDetails } from '../templates';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ot-template-cards',
  templateUrl: './ot-template-cards.component.html',
  styleUrls: ['./ot-template-cards.component.css']
})
export class OtTemplateCardsComponent implements OnInit {
  
  allTemplates: TemplateDetails[];
  submitted:boolean;
  draftName:string;
  isLoading = false;
  templateId:string;
  @ViewChild('popup2') popup2: Popup;
  
  constructor(private templatelistservice:TemplatelistServiceService,private router: Router) { }

  ngOnInit() {
    this.submitted = false;
    this.getTemplateList();
  }

  getTemplateList(){
    this.isLoading = true;
    this.templatelistservice.getTemplates().subscribe((templateData: TemplateDetails[]) => {
      if (templateData) {
        this.allTemplates = templateData;
      }
      this.isLoading = false;
    });
    // console.log(this.allTemplates);
  }

  discardDraftPopup(draftid:string){
   let draftId=draftid;
   console.log(draftId);
    this.popup2.options={
      header: "Discard template",
      confirmBtnContent: "Delete Template",
      showButtons: true,
      cancleBtnContent: "Cancel",
    }
    this.popup2.show(this.popup2.options);
  }
   
  getTemplateById(template:TemplateDetails){
  const templateId = template.draft ? template.draft.id :template.published.id;
  // console.log(Id);
//  console.log(this.templateservice.getTemplate(this.id).subscribe(data=>console.log(data),error => console.log(error)));
  this.templatelistservice.getTemplateById(templateId).subscribe(
    data => {
      
      this.router.navigateByUrl('/builder/'+ templateId+"/1");
      console.log(data);
      },
    error => console.log(error));
  // this.router.navigateByUrl('/template-details/'+ this.Id);
  
}


  discardDraft(rootVersionId:string){
    this.templatelistservice.deleteDraft(rootVersionId);
  }
}
