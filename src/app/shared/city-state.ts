import { Injectable } from '@angular/core';
import { City, Country, State } from 'country-state-city';

@Injectable({
  providedIn: 'root'
})
export class CityStateService {
  getCountries() {
    return Country.getAllCountries();
  }

  getStates(countryCode: string) {
    return State.getStatesOfCountry(countryCode);
  }

  getCities(countryCode: string, stateCode: string) {
    return City.getCitiesOfState(countryCode, stateCode);
  }
}
