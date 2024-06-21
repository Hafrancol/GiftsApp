import { Component } from '@angular/core';
import { GiftsService } from '../../service/gifts.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {

  constructor(private giftSer: GiftsService){

  }

  get gifts(){
    return this.giftSer.giftsData;
  }
}
