import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first ang';
  selector1: boolean;
  selector2:boolean;
  constructor(){
    this.selector1=true;
  }

  changer1():void{
    console.log("clicked");
      this.selector1= true;
      this.selector2=false;
  }
  changer2():void{
    console.log("clicked");
      this.selector2= true;
      this.selector1=false;
  }
}
