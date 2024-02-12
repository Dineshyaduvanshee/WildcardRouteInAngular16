

import { throttleTime } from "rxjs";
import { OthermessageService } from "./othermessage.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class MessageService {
otherMsg :string = "";
  constructor(private _otherMessageService : OthermessageService) { }
 // constructor(private httpCilent: HttpClient){}
  getMessage(){
    return "Welcome to Indicosmic Pvt Ltd";
  }
  getMessageFromOtherMessageService(){
    this.otherMsg = this._otherMessageService.gototherMessageService();
    return this.otherMsg;
  }
}
