import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TemplatelistServiceService } from '../_services/templatelist-service.service';
import { TemplateDetails } from '../templates';
@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  id:string;
  version:string;
  templateName:string;
  templateDetails: TemplateDetails;

  constructor(private route: ActivatedRoute,private templatelistservice:TemplatelistServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("rootVersionId");
      this.version = params.get("templateVersion")
      // console.log(this.id);
    })
    this.gettemplateById(this.id);
  }
  gettemplateById(id:string,){
    this.templatelistservice.getTemplateById(id).subscribe((data)=>{
      if (data) {
        this.templateDetails = data;
        
      }});
  }
}
