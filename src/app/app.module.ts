import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';

import { AppService } from './app.service';

// import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { InternalGuard } from './_guards/internal.guard';
import { LoginGuard } from './_guards/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AppService,
    InternalGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
