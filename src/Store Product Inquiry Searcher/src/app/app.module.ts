import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileContainerComponent } from './profile-container/profile-container.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ProfileContainerComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    //HttpClientModule, // ask Professor Sexton about error // https://www.youtube.com/watch?v=RSJxWJ6dCL4 you were using this tutorial at youtube point 5:57
    AppRoutingModule,
    NgbModule  // you were using this to connect backend to frontend and display the data
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }