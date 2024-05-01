import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootrerComponent } from './shared/footrer/footrer.component';
import { HeaderComponent } from './shared/header/header.component';
import { BtnTopComponent } from './shared/btn-top/btn-top.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { LikesComponent } from './pages/likes/likes.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    FootrerComponent,
    HeaderComponent,
    BtnTopComponent,
    ProjectsComponent,
    AboutmeComponent,
    LikesComponent,
    ContactComponent,
    TechnologiesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
