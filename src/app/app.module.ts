import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FenetreVideoComponent } from './fenetre-video/fenetre-video.component';
import { UserBarComponent } from './user-bar/user-bar.component';
import { ListePlaylistComponent } from './liste-playlist/liste-playlist.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FenetreVideoComponent,
    UserBarComponent,
    ListePlaylistComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
