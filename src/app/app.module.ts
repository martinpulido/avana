import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { HomeComponent } from './components/home.component';
import { WorkCardComponent } from './components/work-card.component';

// Pipes
import { ExceptIndexPipe } from './pipes/exceptIndex.pipe';
import { FirstIndexPipe } from './pipes/firstIndex.pipe';
import { FirstHalfPipe } from './pipes/firstHalf.pipe';
import { SecondHalfPipe } from './pipes/secondHalf.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WorkCardComponent,
    ExceptIndexPipe,
    FirstIndexPipe,
    FirstHalfPipe,
    SecondHalfPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
