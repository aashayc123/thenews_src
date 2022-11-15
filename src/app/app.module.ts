import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsUnitComponent } from './news-unit/news-unit.component';
import { NewsSectionComponent } from './news-section/news-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsUnitComponent,
    NewsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
