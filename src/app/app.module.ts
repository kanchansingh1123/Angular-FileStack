import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppConfigService } from "providers/services/web/app-config.services";
import { FileStack } from "app/feature/filestack/filestack";

@NgModule({
  declarations: [
    AppComponent,
    FileStack
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
