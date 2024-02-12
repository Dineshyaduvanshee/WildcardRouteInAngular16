import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//@Injectable()
export class OthermessageService {
  gototherMessageService(): string {
    console.log("gototherMessageService method called");
    return "gototherMessageService method called";
  }

  constructor() { }
}
