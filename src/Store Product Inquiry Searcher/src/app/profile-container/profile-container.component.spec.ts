import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContainerComponent } from './profile-container.component';

describe('ProfileContainerComponent', () => {
  let component: ProfileContainerComponent;
  let fixture: ComponentFixture<ProfileContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the profile-container', () => {
    expect(component).toBeTruthy();
  });
// profile-container unit test/testing
  it('should say "No store item selected! Store team member please select an item to search." ', () => {
    expect(component.UnitTestForClickOption).toBe('No store item selected! Store team member please select an item to search.');
  });

});
