import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css']  
})
export class AppComponent implements OnInit{ 
  pageTitle: string = 'Roamin Numerals';


  ngOnInit(): void {
  }
}
