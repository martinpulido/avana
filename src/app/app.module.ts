import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { HomeComponent } from './components/home.component';
import { WorkCardComponent } from './components/work-card.component';
import { WorkDetailComponent } from './components/work-detail.component';

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
    WorkDetailComponent,
    ExceptIndexPipe,
    FirstIndexPipe,
    FirstHalfPipe,
    SecondHalfPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
