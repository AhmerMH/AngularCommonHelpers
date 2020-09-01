import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './components/loader/loader.component';
import { FormsModule } from '@angular/forms';

// Material Imports
import { MatProgressSpinnerModule } from '@angular/material';
import { DemoLoaderComponent } from './demos/demo-loader/demo-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    DemoLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
