import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CompanyRouteModule  } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { NewsComponent } from './news/news.component';
import { ReactivevRegFormComponent } from './reactivev-reg-form/reactivev-reg-form.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TeamComponent,
    NewsComponent,
    ReactivevRegFormComponent,
    CustomValidationComponent
  ],
  imports: [
    BrowserModule,
    CompanyRouteModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
