import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { IndividualComponent } from './individual/individual.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    EpisodesComponent,
    IndividualComponent,
    NavigationComponent,
    PaginationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
