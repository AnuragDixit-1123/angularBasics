import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// This is type script feature
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DebugComponent } from './debug/debug.component';

@NgModule({ 
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DebugComponent
  ],
  imports: [
    // This is the feature understood by angular as it is the part of angular module
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [DebugComponent]
})
export class AppModule { }
