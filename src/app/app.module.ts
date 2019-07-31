import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { LinksListComponent } from './links-list/links-list.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { ImageItemComponent } from './image-item/image-item.component';
import { TagsListComponent } from './tags-list/tags-list.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
