import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// This is type script feature
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BasicHighlightdirective } from './basic-highlist/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({ 
  declarations: [
    AppComponent,
    BasicHighlightdirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    // This is the feature understood by angular as it is the part of angular module
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
