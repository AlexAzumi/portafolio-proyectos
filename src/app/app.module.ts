// Dependencias
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
// Servicios
import { ProjectsService } from './services/projects.service';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/GLOBAL/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
// Pipes
import { ReversePipe } from './pipes/reverse.pipe';
import { FooterComponent } from './components/GLOBAL/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ReversePipe,
    FooterComponent,
    AboutComponent,
    ProjectsComponent
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
