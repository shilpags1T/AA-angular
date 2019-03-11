import { Component } from '@angular/core';
import { Templates } from './templates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AA-template';
  parentdata={} as Templates;
}
