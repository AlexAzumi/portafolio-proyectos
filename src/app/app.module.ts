// Dependencias
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Servicios
import { ProjectsService } from './services/projects/projects.service';
import { RepositoriesService } from './services/repositories/repositories.service';
// ngx-bootstrap
import { CollapseModule } from 'ngx-bootstrap/collapse';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/GLOBAL/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/GLOBAL/footer/footer.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
// Pipes
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ReversePipe,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot()
  ],
  providers: [
    ProjectsService,
    RepositoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
