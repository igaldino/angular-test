import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarbonHomeComponent } from './carbon-home/carbon-home.component';
import { CarbonIbmHomeComponent } from './carbon-ibm-home/carbon-ibm-home.component';
import { CarbonIbmTocComponent } from './carbon-ibm-toc/carbon-ibm-toc.component';

@NgModule({
  declarations: [
    AppComponent,
    CarbonHomeComponent,
    CarbonIbmHomeComponent,
    CarbonIbmTocComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
