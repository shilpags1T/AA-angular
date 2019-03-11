import { Injectable } from '@angular/core';
import { Templates } from '../templates';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor() { }
  private data={} as Templates;

  setData(data:any){
      this.data = data;
  }

  getData():any{
      return this.data;
  }
}
