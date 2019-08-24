import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { LinksListComponent } from './components/links-list/links-list.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { ImageItemComponent } from './components/image-item/image-item.component';
import { TagsListComponent } from './components/tags-list/tags-list.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    LinksListComponent,
    ArticleItemComponent,
    VideoItemComponent,
    ImageItemComponent,
    TagsListComponent,
    SignupPageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
