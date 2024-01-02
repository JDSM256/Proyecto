import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, AppRoutingModule, BrowserModule, HttpClientModule],
  exports: [RouterModule],
  bootstrap: [AppComponent],

  

})
export class AppRoutingModule { }
export class AppModule {}
