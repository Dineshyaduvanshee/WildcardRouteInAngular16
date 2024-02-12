import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//console.log("Numlist service loaded....");

//@Injectable()
export class NumlistService {
list : number[]=[100];
  constructor() { }
  addnumber(num : number){
    this.list.push(num);
  }
  getnumber(){
    return this.list;
  }
}
