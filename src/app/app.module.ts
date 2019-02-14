// Dependencias
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Router
import { AppRoutingModule } from './app-routing.module';
// Servicios
import { ProjectsService } from './services/projects.service';
import { ProjectInfoService } from './services/project-info.service';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './GLOBAL/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
// Pipes
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    ProjectInfoComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProjectsService,
    ProjectInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
