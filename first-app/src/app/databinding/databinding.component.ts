import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }

  StringInterpolation ='This is string Interpolation';
  NumberInterpolation = 2;

  onTest() {
  	return true;
  }

  onClick(value: string) {
  	alert(value);
  }

}
