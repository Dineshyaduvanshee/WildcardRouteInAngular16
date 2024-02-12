import { Component, OnInit } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  //providers:[NumlistService] // this service is responsible for the indiusual boject for the service array

})
export class Comp2Component implements OnInit {
list2!: number[];
  
  constructor(private _numlistService : NumlistService) {

  }
  ngOnInit(): void {
    this.list2 = this._numlistService.getnumber();
  }
  addNumer1(value: string) {
    const num = parseInt(value, 10);
    if (!isNaN(num)) {
      this._numlistService.addnumber(num);
      this.list2 = this._numlistService.getnumber();
    } else {
      console.error('Invalid number entered');
    }
  }

}
