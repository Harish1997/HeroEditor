import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public greeting="Hey!";
  public strikeme="line-through";
  public redcolor="red";
  public name ="Harish";
  public myid="testId";
  public messageClasses={
    "text-success":true,
    "text-danger":true
  }

  constructor() { }

  ngOnInit() {
  }
  greetUser(){
    return "Hello "+this.name;
  }
  clicker(event){
    console.log(event);
    this.greeting="Welcome "+event.type;
  }

}
