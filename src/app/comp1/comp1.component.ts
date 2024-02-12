import { Component, OnInit } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  //providers:[NumlistService]  // this service is responsible for the indiusual boject for the service array
})
export class Comp1Component implements OnInit {
  list1!: number[];

  constructor(private _numlistService: NumlistService) {}

  ngOnInit(): void {
    this.list1 = this._numlistService.getnumber();
  }

  addNumber(value: string) {
    const num = parseInt(value, 10);
    if (!isNaN(num)) {
      this._numlistService.addnumber(num);
      this.list1 = this._numlistService.getnumber();
    } else {
      console.error('Invalid number entered');
    }
  }
}
