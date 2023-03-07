import { HttpClientModule } from '@angular/common/http'; // http service provider registration
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OmdbApiService } from './services/omdb-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    HttpClientModule
  ],
  providers: [OmdbApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
