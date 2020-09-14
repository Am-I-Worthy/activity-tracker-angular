import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  element = "";
  public colr = [];
  public show = (this.colr.length == 0) ? true : false;
  public showList = (this.colr.length == 0) ? false : true;
  onClick(value){
    this.colr.push(value);
    console.log(this.colr[0]);
    this.show = false;
    this.element = '';
  }
}
