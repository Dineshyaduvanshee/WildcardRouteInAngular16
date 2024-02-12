import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
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
