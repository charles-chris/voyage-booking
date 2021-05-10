import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/modal/destination';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  destinations = ["All Destinations","Asia","Italy","Sweden"];
  typologys = ["All Typologies","Relax","Sport","History"];
  difficulty= ["All Difficulty","High","Medium","Low"];
  durations = ["All Durations","1-3 Days","3-6 Days","6-10 Days"];
  min_age = ["All min age","10 years","8 years","3 years"];

  desinationModel;
  constructor() { }

  ngOnInit() {
    this.desinationModel = new Destination("","","","","");
  }
  onSubmit() {    
    console.log(this.desinationModel);
  }
}
