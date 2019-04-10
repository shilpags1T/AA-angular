import { Component, OnInit,Input } from '@angular/core';
import {TemplateService} from '../template.service';
import { StateService } from "@uirouter/core";
import { Templates } from '../templates';
import { Observable, from } from 'rxjs';
import { Router, Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.css']
})
export class TemplateDetailsComponent implements OnInit {
  id: number;
  private sub: any;
 
  constructor(private router: Router,private route: ActivatedRoute,private templateservice:TemplateService) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      
  });
}
  
}
