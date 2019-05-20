// Dependencias
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
// Servicios
import { ProjectsService } from './services/projects/projects.service';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/GLOBAL/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
// Pipes
import { ReversePipe } from './pipes/reverse.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';

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
    NgbModule,
    HttpClientModule
  ],
  providers: [
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
