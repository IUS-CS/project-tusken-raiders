import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileContainerComponent } from './profile-container/profile-container.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProfileContainerComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
