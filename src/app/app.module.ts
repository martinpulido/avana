import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

// Components
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { HomeComponent } from './components/home.component';
import { WorkCardComponent } from './components/work-card.component';
import { WorkDetailComponent } from './components/work-detail.component';
import { AboutComponent } from './components/about.component';
import { TeamMemberComponent } from './components/team-member.component';
import { ContactComponent } from './components/contact.component';
import { FormContactComponent } from './components/form-contact.component';

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
    AboutComponent,
    TeamMemberComponent,
    ContactComponent,
    FormContactComponent,
    ExceptIndexPipe,
    FirstIndexPipe,
    FirstHalfPipe,
    SecondHalfPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyABX-TBq8DQ5k2rT2oy9oGYJEg67kbs17E'
    }),
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
