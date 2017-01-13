import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, HomeComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
