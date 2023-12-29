import { Component } from '@angular/core';
import { DropdownService } from '../service/dropdown.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [DropdownComponent],
})
export class DropdownComponent {
  // states = ['option1', 'option2'];
  // country!: string;
  // countrySelected: boolean = false;
  country: string = '';
  states: string[] = [];

  constructor(private ddService: DropdownService) {}

  setState() {
    this.states = this.ddService.getStatesForCountry(this.country);
  }
}

// setState() {
//   if (this.country == 'India' || this.country == 'Germany') {
//     this.states =
//       this.country == 'India'
//         ? ['TamilNadu', 'Delhi', 'pune']
//         : ['Berlin', 'Bavaria', 'Bremen'];
//     this.countrySelected = true;
//   } else {
//     this.countrySelected = false;
//   }
// }
