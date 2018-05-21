import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToasterModule, ToasterService, ToasterConfig, Toast } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     private toasterService: ToasterService;
  
  public config1 : ToasterConfig = new ToasterConfig({
    positionClass: 'toast-bottom-center',
    animation: 'slideUp'
  });

  constructor(toasterService: ToasterService) {
    this.toasterService = toasterService;
  }
  
  popToast() {
    var toast: Toast = {
      type: 'info',
      title: 'Here is a Toast Title',
      body: 'Here is a Toast Body',
      showCloseButton: true 
    };
    
    this.toasterService.pop(toast);
  }
}
