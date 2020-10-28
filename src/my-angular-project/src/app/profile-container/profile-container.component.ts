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

  onSelect(profile: Profile) {
    this.selectedProfile = profile;
  }

  constructor() { }

  ngOnInit() {
  }

}
