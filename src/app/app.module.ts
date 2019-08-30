import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// This is type script feature
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({ 
  declarations: [
    AppComponent
  ],
  imports: [
    // This is the feature understood by angular as it is the part of angular module
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
