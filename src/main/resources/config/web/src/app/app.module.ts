import './rxjs-operators';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { BarComponent } from './component/bar/bar.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { MarkdownModule } from 'angular2-markdown';
import { AppRoutingModule } from './app-routing.module';
import { blogService } from './content/blog/blog.service';
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
    MarkdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    blogService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
