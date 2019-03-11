import { Component, OnInit,Input } from '@angular/core';
import {TemplateService} from '../template.service';
import { StateService } from "@uirouter/core";
import { Templates } from '../templates';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { ShareDataService} from '../sharedService/share-data.service';
@Component({
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.css']
})
export class TemplateDetailsComponent implements OnInit {
 
 @Input() data={} as Templates;
  constructor(private router: Router,private sharedataservice:ShareDataService) { }

  ngOnInit() {
    
    this.data = this.sharedataservice.getData();
    console.log(this.data);
  }
  
}
