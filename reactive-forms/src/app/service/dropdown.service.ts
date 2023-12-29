import { Injectable } from '@angular/core';

@Injectable()
export class DropdownService {
  private states: { [key: string]: string[] } = {
    India: ['TamilNadu', 'Delhi', 'pune'],
    Germany: ['Berlin', 'Bavaria', 'Bremen'],
  };
  getStatesForCountry(country: string): string[] {
    return this.states[country] || [];
  }
}
