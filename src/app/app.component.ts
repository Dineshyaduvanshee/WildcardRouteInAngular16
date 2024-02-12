import { Component, Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { OthermessageService } from './othermessage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // providers:[MessageService]
})
@Injectable()
export class AppComponent {
  title = 'WildcardRouteInAngular16';
  msg : string ="";
  othersms : string ="";
  constructor(private _messageService : MessageService) {
  }
  ngOnInit() {
    
  }
  getotherMessage(){
    let othermsg = "message from other service";
  }
  getMessage(){
    this.msg = this._messageService.getMessage();
    this.othersms = this._messageService.getMessageFromOtherMessageService();
  }

}
