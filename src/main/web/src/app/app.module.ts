import './rxjs-operators';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { BarComponent } from './component/bar/bar.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { AppRoutingModule } from './app-routing.module';
import { loginService } from './content/login/login.service';
import { welcomeService } from './content/welcome/welcome.service';
import { LoginComponent } from './content/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    LoginComponent,
    PaginationComponent,
    WelcomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    loginService,
    welcomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
