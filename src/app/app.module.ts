import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { LogoComponent } from './logo/logo.component';
import { InfoComponent } from './info/info.component';
import { HeadlineComponent } from './headline/headline.component';
import { SummaryComponent } from './summary/summary.component';
import { SkillComponent } from './skill/skill.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    InfoComponent,
    HeadlineComponent,
    SummaryComponent,
    SkillComponent,
    FooterComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
