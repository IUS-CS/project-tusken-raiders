import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/DataProductInfo'
import { PROFILE } from '../StoreDATA/StoreProducts';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnInit {
  selectedProfile: Profile;
  profiles = PROFILE;

// part of our unit testing that checks if the  clicking option for our website works well
UnitTestForClickOption = 'No store item selected! Store team member please select an item to search.';
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(profile: Profile): void {
    this.selectedProfile = profile;
  }


}
