import { Component, OnInit } from '@angular/core';
import { TemplatelistServiceService } from '../_services/templatelist-service.service';
import { TemplateDetails } from '../templates';

@Component({
  selector: 'app-archive-templates',
  templateUrl: './archive-templates.component.html',
  styleUrls: ['./archive-templates.component.css']
})
export class ArchiveTemplatesComponent implements OnInit {
  allTemplates: TemplateDetails[];
  constructor(private templatelistservice:TemplatelistServiceService) { }

  ngOnInit() {
    this.getArchives();
  }
  getArchives()
  {
    this.templatelistservice.getArchives().subscribe((templateData: TemplateDetails[]) => {
      if (templateData) {
        this.allTemplates = templateData;
      }
      // this.isLoading = false;
    });
    // console.log(this.allTemplates);
  };
  
}
