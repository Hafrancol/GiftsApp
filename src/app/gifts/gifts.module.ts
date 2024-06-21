import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchComponent } from './componentes/search/search.component';
import { CardListComponent } from './componentes/card-list/card-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchComponent,
    CardListComponent
  ],
  exports:[
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class GiftsModule { }
